import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';
import type { Shift } from '@/mocks/shifts';
import type { ColumnDef } from '@tanstack/react-table';

export const columns: Array<ColumnDef<Shift>> = [
  {
    accessorKey: 'facilityName',
    header: 'Facility Name',
    cell: ({ row, table }) => {
      const isLoading = (table.options.meta as any)?.isLoading

      if (isLoading || Object.keys(row.original).length == 0) {
        return <Skeleton className="h-4 w-37.5" />
      }

      const facilityName = row.original?.facilityName
      return (
        <div>
          {facilityName}
        </div>
      )
    }
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row, table }) => {
      const isLoading = (table.options.meta as any)?.isLoading

      if (isLoading || Object.keys(row.original).length == 0) {
        return <Skeleton className="h-4 w-37.5" />
      }

      const role = row.original?.role
      return (
        <div>
          {role}
        </div>
      )
    }
  },
  {
    accessorKey: 'location',
    header: 'Location',
    cell: ({ row, table }) => {
      const isLoading = (table.options.meta as any)?.isLoading

      if (isLoading || Object.keys(row.original).length == 0) {
        return <Skeleton className="h-4 w-37.5" />
      }

      const location = row.original?.location
      const { city, state } = location

      if (!city || !state) {
        return <span className="text-muted-foreground">N/A</span >
      }

      return (
        <div className="flex flex-col " >
          <div>{city}</div>
          <div className="text-[0.75rem] text-gray-700">{state}</div>
        </div >
      )
    }
  },
  {
    accessorKey: 'startTime',
    header: 'Date',
    cell: ({ row, table }) => {
      const isLoading = (table.options.meta as any)?.isLoading

      if (isLoading || Object.keys(row.original).length == 0) {
        return <Skeleton className='h-4 w-37.5' />
      }

      const d = new Date(0)
      return <div>{d.toISOString()}</div>;
    }
  },
  {
    accessorKey: 'hourlyRate',
    header: 'Hourly Rate',
    cell: ({ row, table }) => {
      const isLoading = (table.options.meta as any)?.isLoading
      if (isLoading || Object.keys(row.original).length === 0) {
        return <Skeleton className='h-4 w-37.5' />
      }
      const rate = row.original?.hourlyRate;
      if (!rate) {
        return <span className="text-muted-foreground">N/A</span>
      }
      return <div>${rate.toFixed(2)}</div>;
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row, table }) => {
      const isLoading = (table.options.meta as any)?.isLoading

      if (isLoading || Object.keys(row.original).length == 0) {
        return <Skeleton className='h-4 w-37.5' />
      }

      const claim = row.original.status
      return (
        <Button onClick={() => console.log("hello")} className='hover:cursor'>
          Claim Shift
        </Button >
      )

    }
  }
]