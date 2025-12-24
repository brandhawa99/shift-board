import { createFileRoute } from '@tanstack/react-router'
import { Container } from '@/components/Container'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container className=''>
      <h1>Dashboard</h1>
    </Container>
  )
}
