import type { RowData } from '@tanstack/react-table'
import type { Shift } from '@/types/index'

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    showShiftDetails: (shift: TData) => void
    updateStatusToPending: (id: string) => void
  }

  interface ColumnMeta<TData extends RowData, TValue> {
    label: string
    filterVariant?: 'select' | 'range'
  }
}
