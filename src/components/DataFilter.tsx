import { useEffect, useState } from 'react'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface DataFilterProps {
  statusColumn: any
  facilityColumn: any
}

export default function DataFilter({
  statusColumn,
  facilityColumn,
}: DataFilterProps) {
  if (!statusColumn || !facilityColumn) return null

  return (
    <div className="flex items-center py-4 gap-2">
      <StatusFilter status={statusColumn} />
      <FacilityFilter facilityName={facilityColumn} />
    </div>
  )
}

function StatusFilter({ status }: { status: any }) {
  return (
    <Select
      onValueChange={(value) =>
        status?.setFilterValue(value === 'all' ? '' : value)
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

function FacilityFilter({ facilityName }: { facilityName: any }) {
  const [value, setValue] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      facilityName?.setFilterValue(value)
    }, 300)
    return () => clearTimeout(timeout)
  }, [value, facilityName])

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
