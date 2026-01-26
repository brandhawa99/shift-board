import type { RowData } from '@tanstack/react-table'
import type { Shift } from './your-shift-type-location' // Import your Shift model

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    showShiftDetails: (shift: TData) => void
    updateStatusToPending: (id: Shift['id']) => void
  }

  interface ColumnMeta<TData extends RowData, TValue> {
    label: string
    filterVariant?: 'select' | 'range'
  }
}
