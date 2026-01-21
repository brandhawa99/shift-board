import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'
import type { Shift } from '@/mocks/shifts'
import type { Dispatch, SetStateAction } from 'react'

interface ShiftDetailsProps {
  selectedShift: Shift | null
  setSelectedShift: Dispatch<SetStateAction<Shift | null>>
}

const ShiftDetails = ({
  selectedShift,
  setSelectedShift,
}: ShiftDetailsProps) => {
  return (
    <Dialog open={!!selectedShift} onOpenChange={() => setSelectedShift(null)}>
      <DialogDescription asChild>
        <DialogContent>
          <DialogTitle>Congrats on Getting Booked</DialogTitle>
          {selectedShift && (
            <div className="py-4">
              <p>
                <strong>🏥Facility:</strong> {selectedShift.facilityName}
              </p>
              <p>
                <strong>📍Location:</strong> {selectedShift.location.city}{' '}
                {selectedShift.location.state}
              </p>
              <p>
                <strong>💰Rate:</strong> ${selectedShift.hourlyRate}/hr
              </p>
              <p>
                <strong>✨Status:</strong> {selectedShift.status}
              </p>
              <p>
                <strong>📞Contact:</strong> 123-123-1234
              </p>
              <p>
                <strong>🤐Access Code:</strong> 123-123-1234
              </p>
            </div>
          )}
        </DialogContent>
      </DialogDescription>
    </Dialog>
  )
}

export default ShiftDetails
