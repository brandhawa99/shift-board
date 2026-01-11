import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Container } from '@/components/Container'
import { columns } from '@/components/Columns'
import DataTable from '@/components/DataTable'
import {
  getShifts,
  getShiftsError,
  getShiftsSlow,
  noShifts,
} from '@/mocks/shifts'
import NetworkSelect from '@/components/NetworkSelect'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  const [tableInstance, setTableInstance] = useState(null)
  const [network, setNetwork] = useState('normal')

  const { data, isLoading } = useQuery({
    queryKey: ['shifts', network],
    queryFn: () => {
      switch (network) {
        case 'slow':
          return getShiftsSlow()
        case 'empty':
          return noShifts()
        case 'error':
          return getShiftsError()
        default:
          return getShifts()
      }
    },
    staleTime: 0,
    gcTime: 0,
  })

  return (
    <div className="flex flex-col w-full bg-blue-200">
      <div className="w-full border-b-black">
        <Container className="">
          <NetworkSelect setNetwork={setNetwork} />
        </Container>
        <Container className="py-10">
          <h1 className="text-4xl font-bold pb-2">Shifts Overview</h1>
          <p className="text-md">
            Browse and filter available healthcare shifts in your area
          </p>
        </Container>
      </div>
      <div className="w-full bg-white border-t-black b-4">
        <Container className="py-6">
          <DataTableToolbar table={tableInstance} />

          <DataTable
            columns={columns}
            data={data ?? []}
            isLoading={isLoading}
            getTableInstance={setTableInstance}
          />
        </Container>
      </div>
    </div>
  )
}

function DataTableToolbar({ table }) {
  return (
    <div className="flex items-center py-4 gap-2">
      <StatusFilter table={table} />
      <FacilityFilter table={table} />
    </div>
  )
}

function StatusFilter({ table }) {
  return (
    <Select
      onValueChange={(value) =>
        table.getColumn('status')?.setFilterValue(value === 'all' ? '' : value)
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Shifts</SelectItem>
        <SelectItem value="available">Available</SelectItem>
        <SelectItem value="pending">Pending</SelectItem>
        <SelectItem value="claimed">Claimed</SelectItem>
        <SelectItem value="filled">Filled</SelectItem>
      </SelectContent>
    </Select>
  )
}

function FacilityFilter({ table }) {
  const [value, setValue] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      table.getColumn('facilityName')?.setFilterValue(value)
    }, 300)
    return () => clearTimeout(timeout)
  }, [value, table])

  return (
    <div>
      <div>
        <Input
          placeholder="Facility Name"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}
