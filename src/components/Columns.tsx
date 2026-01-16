import { ArrowUpDown } from 'lucide-react'
import { Skeleton } from './ui/skeleton'
import {
  ActionCell,
  DateCell,
  FacilityCell,
  LocationCell,
  RateCell,
  RoleCell,
  StatusCell,
} from './TableComponents'
import { Button } from './ui/button'
import type { ColumnDef, RowData } from '@tanstack/react-table'
import type { Shift } from '@/mocks/shifts'

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    isLoading?: boolean
  }
}

const withSkeleton = (Component: React.FC<any>) => {
  return (props: any) => {
    const isLoading = props.table.options.meta?.isLoading
    if (isLoading || Object.keys(props.row.original || {}).length === 0) {
      return <Skeleton />
    }
    return <Component {...props} />
  }
}

export const columns: Array<ColumnDef<Shift>> = [
  {
    accessorKey: 'facilityName',
    header: 'Facility Name',
    cell: withSkeleton(({ row }) => (
      <FacilityCell facilityName={row.original.facilityName} />
    )),
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: withSkeleton(({ row }) => {
      ;<RoleCell role={row.original.role} />
    }),
  },
  {
    accessorKey: 'location',
    header: 'Location',
    cell: withSkeleton(({ row }) => {
      const { city, state } = row.original.location
      return <LocationCell city={city} state={state} />
    }),
  },
  {
    accessorKey: 'startTime',
    header: 'Date',
    cell: withSkeleton(({ row }) => {
      const timestamp = row.original.startTime
      const date = new Date(timestamp)

      const dateString = date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

      const timeString = date.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
      })
      return <DateCell date={dateString} time={timeString} />
    }),
  },
  {
    accessorKey: 'hourlyRate',
    header: ({ column }) => {
      return (
        // hide button on mobile view
        <>
          <Button
            variant="ghost"
            className="-ml-4 h-8 data-[state=open]:bg-accent max-md:hidden"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Hourly Rate
            <ArrowUpDown className="ml-2 h-4 w-4 max-md:hidden" />
          </Button>
          <div className="md:hidden">Hourly Rate</div>
        </>
      )
    },
    cell: withSkeleton(({ row }) => (
      <RateCell rate={row.original.hourlyRate.toFixed(2)} />
    )),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: withSkeleton(({ row }) => {
      return <StatusCell status={row.original.status} />
    }),

    meta: {
      filterVariant: 'range',
    },
  },
  {
    header: 'Actions',
    id: 'actions',
    cell: ({ row, table }) => {
      const isLoading = table.options.meta?.isLoading
      if (isLoading || Object.keys(row.original).length == 0) {
        return <Skeleton />
      }
      return <ActionCell row={row.original} table={table} />
    },
  },
]
