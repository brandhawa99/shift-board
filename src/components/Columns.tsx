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
import type { Shift } from '@/mocks/shifts'
import type { ColumnDef } from '@tanstack/react-table'

export const columns: Array<ColumnDef<Shift>> = [
  {
    accessorKey: 'facilityName',
    header: 'Facility Name',
    cell: ({ row, table }) => {
      const isLoading = (table.options.meta as any)?.isLoading

      if (isLoading || Object.keys(row.original).length == 0) {
        return <Skeleton />
      }
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      const facilityName = row.original?.facilityName
      return <FacilityCell facilityName={facilityName} />
    },
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row, table }) => {
      const isLoading = (table.options.meta as any)?.isLoading

      if (isLoading || Object.keys(row.original).length == 0) {
        return <Skeleton />
      }

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      const role = row.original?.role
      return <RoleCell role={role} />
    },
  },
  {
    accessorKey: 'location',
    header: 'Location',
    cell: ({ row, table }) => {
      const isLoading = (table.options.meta as any)?.isLoading

      if (isLoading || Object.keys(row.original).length == 0) {
        return <Skeleton />
      }

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      const location = row.original?.location
      const { city, state } = location

      if (!city || !state) {
        return <span className="text-muted-foreground">N/A</span>
      }

      return <LocationCell city={city} state={state} />
    },
  },
  {
    accessorKey: 'startTime',
    header: 'Date',
    cell: ({ row, table }) => {
      const isLoading = (table.options.meta as any)?.isLoading

      if (isLoading || Object.keys(row.original).length == 0) {
        return <Skeleton />
      }
      const date = new Date()
      const randomDays = Math.floor(Math.random() * 20) + 1
      date.setDate(date.getDate() + randomDays)
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
    },
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
    cell: ({ row, table }) => {
      const isLoading = (table.options.meta as any)?.isLoading
      if (isLoading || Object.keys(row.original).length === 0) {
        return <Skeleton />
      }
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      const rate = row.original?.hourlyRate
      if (!rate) {
        return <span className="text-muted-foreground font-bold">N/A</span>
      }
      return <RateCell rate={rate.toFixed(2)} />
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row, table }) => {
      const isLoading = (table.options.meta as any)?.isLoading
      if (isLoading || Object.keys(row.original).length == 0) {
        return <Skeleton />
      }
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      const status = row.original?.status
      return <StatusCell status={status} />
    },
    meta: {
      filterVariant: 'range',
    },
  },
  {
    header: 'Actions',
    id: 'actions',
    cell: ({ row, table }) => {
      const isLoading = (table.options.meta as any)?.isLoading
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      const status = row.original?.status

      if (isLoading || Object.keys(row.original).length == 0) {
        return <Skeleton />
      }

      // const claim = row.original.status
      return <ActionCell status={status} />
    },
  },
]
