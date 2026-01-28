import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Container } from '@/components/Container'
import { columns } from '@/components/Columns'
import DataTable from '@/components/DataTable'
import {
  getShifts,
  getShiftsError,
  getShiftsSlow,
  noShifts,
} from '@/lib/fake-api'
import NetworkSelect from '@/components/NetworkSelect'
import { useApplyShift } from '@/hooks/useApplyShift'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  const [network, setNetwork] = useState('normal')

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['shifts', network],
    queryFn: () => {
      switch (network) {
        case 'slow':
          return getShiftsSlow()
        case 'empty':
          return noShifts()
        case 'error':
          return getShiftsError()
        default:
          return getShifts()
      }
    },
    staleTime: Infinity,
    gcTime: 0,
    retry: false, // Disable automatic retries on failure - makes the getShiftError run only once
  })
  const { mutate: applyToShift } = useApplyShift(['shifts', network]) // shifts , network used in cancel queries

  return (
    <div className="flex flex-col w-full bg-blue-200">
      <div className="w-full border-b-black">
        <Container className="">
          <NetworkSelect setNetwork={setNetwork} />
        </Container>
        <Container className="py-10">
          <h1 className="text-4xl font-bold pb-2">Shifts Overview</h1>
          <p className="text-md">
            Browse and filter available healthcare shifts in your area
          </p>
        </Container>
      </div>
      <div className="w-full bg-white border-t-black b-4">
        {isError ? (
          <Container className="py-6">
            <div className="text-red-500 font-semibold">{error.message}</div>
          </Container>
        ) : null}
        <Container className="py-6">
          <DataTable
            columns={columns}
            data={data ?? []}
            isLoading={isLoading}
            updateShiftToPending={(id) => applyToShift(id)}
          />
        </Container>
      </div>
    </div>
  )
}
