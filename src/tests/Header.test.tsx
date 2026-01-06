import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router'
import Header from '@/components/Header'
import '@testing-library/jest-dom/vitest'

describe('Header', () => {
  const setupRouter = (initialPath = '/') => {
    // 1. Create a root route that renders your Header
    const rootRoute = createRootRoute({
      component: Header,
    })

    // 2. Create the router with memory history
    const router = createRouter({
      routeTree: rootRoute,
      history: createMemoryHistory({
        initialEntries: [initialPath],
      }),
    })

    return router
  }

  it("renders 'Health Board' logo text", async () => {
    const router = setupRouter('/')
    render(<RouterProvider router={router} />)

    const logoText = await screen.findByText('Health Board')
    expect(logoText).toBeInTheDocument()
  })
  it("renders 'Dashboard' Button on home page", async () => {
    const router = setupRouter('/')
    render(<RouterProvider router={router} />)

    const link = await screen.findByRole('link', { name: /Dashboard/i })
    expect(link).toHaveAttribute('href', '/dashboard')
  })

  it("renders 'Home' Button on dashboard page", async () => {
    const router = setupRouter('/dashboard')
    render(<RouterProvider router={router} />)

    const link = await screen.findByRole('link', { name: /Home/i })
    expect(link).toHaveAttribute('href', '/')
  })

  it("renders 'Logo' as Button to home on dashboard page", async () => {
    const router = setupRouter('/dashboard')
    render(<RouterProvider router={router} />)

    const link = await screen.findByRole('link', { name: /Health Board/i })
    expect(link).toHaveAttribute('href', '/')
  })
})
