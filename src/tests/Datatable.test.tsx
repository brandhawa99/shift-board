import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import type { Shift } from '@/mocks/shifts'
import DataTable from '@/components/DataTable'
import { ActionCell } from '@/components/TableComponents'
import '@testing-library/jest-dom/vitest'
import { generateRandomFutureDate } from '@/lib/mock-data'

const testColumns = [
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row, table }: { row: any; table: any }) => (
      <ActionCell row={row.original} tableMeta={table.options.meta} />
    ),
  },
]

const TestTable = ({
  initialShifts, // Pass the mocks here
  updateShiftToPending,
}: {
  initialShifts: Array<Shift>
  updateShiftToPending: any
}) => {
  const { data } = useQuery({
    queryKey: ['shifts', 'normal'],
    queryFn: () => initialShifts, // Return mocks if it refetches
    initialData: initialShifts, // <--- Crucial: populates the cache instantly
    staleTime: Infinity,
  })

  return (
    <DataTable
      columns={testColumns}
      data={data}
      isLoading={false}
      updateShiftToPending={updateShiftToPending}
    />
  )
}

const mockShifts: Array<Shift> = [
  {
    id: '1',
    facilityName: 'General Hospital',
    status: 'available',
    location: { city: 'van', state: 'ca' },
    role: 'CNA',
    startTime: generateRandomFutureDate(),
    hourlyRate: 0,
  },
  {
    id: '2',
    facilityName: 'General Hospital',
    status: 'claimed',
    location: { city: 'van', state: 'ca' },
    role: 'CNA',
    startTime: generateRandomFutureDate(),
    hourlyRate: 0,
  },
]

function setup(initialShift: Array<Shift> = []) {
  const user = userEvent.setup()
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  const updateShift = (id: number) => {
    queryClient.setQueryData(['shifts', 'normal'], (old: any) =>
      old?.map((s: any) => (s.id === id ? { ...s, status: 'pending' } : s)),
    )
  }

  queryClient.setQueryData(['shifts', 'normal'], initialShift)
  const utils = render(
    <QueryClientProvider client={queryClient}>
      <TestTable initialShifts={[]} updateShiftToPending={updateShift} />
    </QueryClientProvider>,
  )

  return {
    ...utils,
    user,
    queryClient,
  }
}

describe('DataTable Status Change', () => {
  it('should change status to Pending when Claim Shift is clicked', async () => {
    const { user } = setup(mockShifts)
    const claimButton = screen.getByRole('button', { name: /claim shift/i })
    expect(claimButton).toBeInTheDocument()
    await user.click(claimButton)
    await waitFor(() => {
      expect(screen.getByText(/pending/i)).toBeInTheDocument()
    })
  })
  it('"View Details" button should open a dialog box with details', async () => {
    const { user } = setup(mockShifts)
    const viewDetailsButton = screen.getByRole('button', {
      name: /view details/i,
    })
    expect(viewDetailsButton).toBeInTheDocument()

    await user.click(viewDetailsButton)
    await waitFor(() => {
      expect(screen.getByText(/📞Contact:/i)).toBeInTheDocument()
    })
  })
})
