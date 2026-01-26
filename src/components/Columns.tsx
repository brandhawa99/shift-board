import { ArrowUpDown } from 'lucide-react'
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
import type { ColumnDef, TableMeta } from '@tanstack/react-table'
import type { Shift } from '@/types/index'

export const columns: Array<ColumnDef<Shift>> = [
  {
    accessorKey: 'facilityName',
    header: 'Facility Name',
    cell: ({ row }) => (
      <FacilityCell facilityName={row.original.facilityName} />
    ),
    meta: {
      label: 'Facility Name',
    },
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => {
      return <RoleCell role={row.original.role} />
    },
    filterFn: 'equalsString',
    meta: {
      label: 'Role',
    },
  },
  {
    accessorKey: 'location',
    header: 'Location',
    cell: ({ row }) => {
      const { city, state } = row.original.location
      return <LocationCell city={city} state={state} />
    },
    meta: {
      label: 'Location',
    },
  },
  {
    accessorKey: 'startTime',
    header: 'Date',
    cell: ({ row }) => {
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
    },
    meta: {
      label: 'Date',
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
    cell: ({ row }) => <RateCell rate={row.original.hourlyRate.toFixed(2)} />,
    meta: {
      label: 'Hourly Rate',
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      return <StatusCell status={row.original.status} />
    },

    meta: {
      label: 'Status',
      filterVariant: 'range',
    },
  },
  {
    header: 'Actions',
    id: 'actions',
    cell: ({ row, table }) => {
      const tableMeta = table.options.meta as TableMeta<Shift>
      return <ActionCell row={row.original} tableMeta={tableMeta} />
    },
    meta: {
      label: 'Actions',
    },
  },
]
