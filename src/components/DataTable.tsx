import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { memo, useEffect, useMemo, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { Dialog, DialogContent, DialogTitle } from './ui/dialog'
import type { Dispatch, JSX, SetStateAction } from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import type { Shift } from '@/mocks/shifts'

interface DataTableProps<TData, TValue> {
  columns: Array<ColumnDef<TData, TValue>>
  data: Array<TData>
  isLoading: boolean
  getTableInstance: Dispatch<SetStateAction<TData>>
}

interface ColumnFilter {
  id: string
  value: unknown
}

type ColumnFiltersState = Array<ColumnFilter>

function DataTable<TData, TValue>({
  columns,
  data,
  isLoading,
  getTableInstance,
}: DataTableProps<TData, TValue>) {
  const tableData = useMemo(
    () => (isLoading ? (Array(11).fill({}) as Array<TData>) : data),
    [data, isLoading],
  )

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [selectedShift, setSelectedShift] = useState<Shift | null>(null)
  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    //
    meta: {
      showShiftDetails: (shift: Shift) => setSelectedShift(shift),
    },
  })
  useEffect(() => {
    {
      /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
    }
    if (getTableInstance) {
      getTableInstance(table)
    }
  }, [table, getTableInstance])

  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader className="bg-gray-200 max-md:hidden">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
                // 1. Change to flex-col on mobile, back to table-row on desktop
                className="flex flex-col md:table-row border-b md:border-none py-4 md:py-0"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    // 2. Space cells vertically on mobile, restore cell layout on desktop
                    className="flex justify-between items-center md:table-cell py-1.5 md:py-4"
                  >
                    {/* 3. Show Label on mobile only */}
                    <span className="font-medium text-muted-foreground md:hidden mr-2">
                      {flexRender(
                        cell.column.columnDef.header,
                        table.getHeaderGroups()[0].headers[0].getContext(),
                      )}
                      {/* {cell.column.columnDef.header?.toString()} */}
                    </span>

                    <div className="text-right md:text-left">
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
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Dialog
        open={!!selectedShift}
        onOpenChange={() => setSelectedShift(null)}
      >
        <DialogContent>
          <DialogTitle>Congrats On Getting Booked</DialogTitle>
          <div className="py-4">
            <p>
              <strong>🏥Facility:</strong> {selectedShift?.facilityName}
            </p>
            <p>
              <strong>📍Location:</strong> {selectedShift?.location.city}{' '}
              {selectedShift?.location.state}
            </p>
            <p>
              <strong>💰Rate:</strong> ${selectedShift?.hourlyRate}/hr
            </p>
            <p>
              <strong>✨Status:</strong> {selectedShift?.status}
            </p>
            <p>
              <strong>📞Contact:</strong> 123-123-1234
            </p>
            <p>
              <strong>🤐Access Code:</strong> 123-123-1234
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default memo(DataTable) as <TData, TValue>(
  props: DataTableProps<TData, TValue>,
) => JSX.Element
