import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { memo, useCallback, useState } from 'react'
import ShiftDetails from './ShiftDetails'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { Skeleton } from './ui/skeleton' // Assume standard shadcn skeleton
import DataFilter from './DataFilter'
import type { ColumnDef } from '@tanstack/react-table'
import type { JSX } from 'react'
import type { Shift } from '@/types/index'

interface DataTableProps<TData, TValue> {
  columns: Array<ColumnDef<TData, TValue>>
  data: Array<TData>
  isLoading: boolean
  updateShiftToPending: (id: Shift['id']) => void
}

function DataTable<TData extends Shift, TValue>({
  columns,
  data,
  isLoading,
  updateShiftToPending,
}: DataTableProps<TData, TValue>) {
  const [selectedShift, setSelectedShift] = useState<Shift | null>(null)

  const showShiftDetails = useCallback(
    (shift: TData) => setSelectedShift(shift),
    [],
  )
  const updateStatusToPendingCallback = useCallback(
    (id: string) => updateShiftToPending(id),
    [updateShiftToPending],
  )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    meta: {
      showShiftDetails,
      updateStatusToPending: updateStatusToPendingCallback,
    },
  })

  if (isLoading) {
    return (
      <>
        <DataFilter
          roleColumn={table.getColumn('role')}
          statusColumn={table.getColumn('status')}
          facilityColumn={table.getColumn('facilityName')}
          table={table}
        />
        <Table className="overflow-hidden rounded-md border">
          <TableBody>
            {Array.from({ length: 11 }).map((_, i) => (
              <TableRow
                key={i}
                className="flex flex-col md:table-row p-4 md:p-0"
              >
                {columns.map((_, j) => (
                  <TableCell key={j} className="py-2 md:py-4">
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    )
  }

  return (
    <>
      <DataFilter
        statusColumn={table.getColumn('status')}
        facilityColumn={table.getColumn('facilityName')}
        roleColumn={table.getColumn('role')}
        table={table}
      />
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader className="bg-gray-100 max-md:hidden">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="max-md:flex max-md:flex-col max-md:border-b max-md:p-4"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="max-md:flex max-md:justify-between max-md:border-none max-md:py-2"
                    >
                      {/* 2. The Mobile Label */}
                      <span className="md:hidden font-semibold text-xs uppercase tracking-wider text-muted-foreground mr-4">
                        {cell.column.columnDef.meta?.label}
                      </span>
                      {/* 2. The Dotted/Dashed Leader */}
                      <div className="md:hidden grow border-b border-dashed border-muted-foreground/30 mx-2 mb-2" />

                      {/* 3. The Cell Value */}
                      <div className="max-md:text-right">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {/* Popup for shifts details */}
        <ShiftDetails
          selectedShift={selectedShift}
          setSelectedShift={setSelectedShift}
        />
      </div>
    </>
  )
}

export default memo(DataTable) as <TData, TValue>(
  props: DataTableProps<TData, TValue>,
) => JSX.Element
