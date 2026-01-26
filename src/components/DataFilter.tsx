import { useEffect, useState } from 'react'
import { FunnelX } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import type { Column, Table } from '@tanstack/react-table'
import type { shiftRole } from '@/types/index'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface DataFilterProps<TData, TValue> {
  statusColumn: Column<TData, TValue> | undefined
  facilityColumn: Column<TData, TValue> | undefined
  roleColumn: Column<TData, TValue> | undefined
  table: Table<TData>
}

export default function DataFilter<TData, TValue>({
  statusColumn,
  facilityColumn,
  roleColumn,
  table,
}: DataFilterProps<TData, TValue>) {
  if (!statusColumn || !facilityColumn || !roleColumn) {
    return null
  }

  return (
    <div className="flex items-center py-4 gap-2">
      <FacilityFilter facilityColumn={facilityColumn} />
      <StatusFilter status={statusColumn} />
      <RoleFilter roleColumn={roleColumn} />
      <FilterReset table={table} />
    </div>
  )
}

const ROLES: Array<shiftRole> = [
  'CNA',
  'RN',
  'MA',
  'CPT',
  'LPN',
  'NP',
  'CG',
  'ORRN',
  'PT',
  'CK',
  'EVS',
  'MISC',
]

function RoleFilter<TData, TValue>({
  roleColumn,
}: {
  roleColumn: Column<TData, TValue>
}) {
  const filterValue =
    (roleColumn.getFilterValue() as string | undefined) ?? 'all'

  return (
    <Select
      value={filterValue === '' ? 'all' : filterValue}
      onValueChange={(value) =>
        roleColumn.setFilterValue(value === 'all' ? '' : value)
      }
    >
      <SelectTrigger className="w-44">
        <SelectValue placeholder="Filter Role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Roles</SelectItem>
        {ROLES.map((role) => {
          return (
            <SelectItem key={role} value={role}>
              {role}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}

function FacilityFilter<TData, TValue>({
  facilityColumn,
}: {
  facilityColumn: Column<TData, TValue>
}) {
  const [value, setValue] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      facilityColumn.setFilterValue(value)
    }, 300)
    return () => clearTimeout(timeout)
  }, [value, facilityColumn])

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

function StatusFilter<TData, TValue>({
  status,
}: {
  status: Column<TData, TValue>
}) {
  const filterValue = (status.getFilterValue() as string | undefined) ?? 'all'

  return (
    <Select
      value={filterValue === '' ? 'all' : filterValue}
      onValueChange={(value) =>
        status.setFilterValue(value === 'all' ? '' : value)
      }
    >
      <SelectTrigger className="w-44">
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

function FilterReset<TData>({ table }: { table: Table<TData> }) {
  const isFiltered = table.getState().columnFilters.length > 0
  const isSorted = table.getState().sorting.length > 0

  if (!isFiltered && !isSorted) return null

  const handleReset = () => {
    table.resetColumnFilters()
    table.resetSorting()
  }

  return (
    <Button
      variant="ghost"
      onClick={handleReset}
      className="h-8 px-2 lg:px-3 text-muted-foreground hover:text-foreground"
    >
      Reset Filters
      <FunnelX className="ml-2 h-4 w-4" />
    </Button>
  )
}
