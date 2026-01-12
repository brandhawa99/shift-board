import { Button } from './ui/button'
import type { Shift } from '@/mocks/shifts'
import type { Table } from '@tanstack/react-table'

export const FacilityCell = ({ facilityName }: { facilityName: string }) => {
  return <div>{facilityName}</div>
}

export const RoleCell = ({ role }: { role: string }) => {
  return <div>{role}</div>
}

export const LocationCell = ({
  city,
  state,
}: {
  city: string
  state: string
}) => {
  return (
    <div className="flex text-center">
      <div>
        {city},&nbsp;{state}
      </div>
    </div>
  )
}

export const DateCell = ({ date, time }: { date: string; time: string }) => {
  return (
    <div>
      <div>{date}</div>
      <div>{time}</div>
    </div>
  )
}

export const RateCell = ({ rate }: { rate: string }) => {
  return <div className="font-semibold">${rate}</div>
}

const statusStyles = {
  available: 'bg-blue-100 text-blue-800 border-blue-200',
  claimed: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  pending: 'bg-purple-100 text-purple-800 border-purple-200',
  filled: 'bg-green-100 text-green-800 border-green-200',
}
export const StatusCell = ({ status }: { status: string }) => {
  const currentStyle =
    statusStyles[status as keyof typeof statusStyles] ||
    'bg-gray-100 text-gray-800'
  return (
    <span
      className={`px-2 py-1 rounded-full border text-xs font-medium ${currentStyle}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}
const statusButtonStyles = {
  available: 'bg-blue-600 hover:bg-blue-700 text-white',
  claimed: 'bg-amber-500 hover:bg-amber-600 text-black',
  pending: 'bg-purple-600 hover:bg-purple-700 text-white',
  filled: 'bg-slate-200 text-slate-500 cursor-not-allowed',
}
export const ActionCell = ({
  row,
  table,
}: {
  row: Shift
  table: Table<Shift>
}) => {
  const { status, id } = row

  const handleAction = () => {
    if (status === 'available') {
    } else if (status == 'claimed') {
      table.options.meta!.showShiftDetails(row)
    }
  }

  return (
    <Button
      onClick={handleAction}
      variant={status === 'filled' ? 'secondary' : 'default'}
      className={statusButtonStyles[status]}
      disabled={status === 'filled' || status === 'pending'}
    >
      {status === 'available' && 'Claim Shift'}
      {status === 'claimed' && 'View Details'}
      {status === 'pending' && 'Pending'}
      {status === 'filled' && 'Filled'}
    </Button>
  )
}
