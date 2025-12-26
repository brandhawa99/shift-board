import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider
} from '@tanstack/react-router'
import { act } from 'react'
import Header from '../components/Header'

// 1. Setup a minimal Route Tree for the test
const rootRoute = createRootRoute()
const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/' })
const dashboardRoute = createRoute({ getParentRoute: () => rootRoute, path: '/dashboard' })
const routeTree = rootRoute.addChildren([indexRoute, dashboardRoute])

// Helper function to render Header with a specific path
const renderHeader = async (path: string) => {
  const history = createMemoryHistory({ initialEntries: [path] })
  const router = createRouter({ routeTree, history })

  let result;

  act(() => {
    result = render(
      <RouterProvider router={router} defaultComponent={() => <Header />} />
    )
  })

  await router.load()
  return result
}



describe("Header Component", () => {
  test("renders 'Dashboard' link when on the Home Page", async () => {
    await renderHeader("/")

    expect(screen.getByText(/Health Board/i)).toBeInTheDocument()

    const actionButton = screen.getByRole("link", { name: /dashboard/i })
    expect(actionButton).toBeInTheDocument()
    expect(actionButton).toHaveAttribute("href", "/dashboard")
  })
  test("renders 'Home' button when on the Dashboard Page", async () => {
    await renderHeader("/dashboard")

    const actionBUtton = screen.getByRole("link", { name: /home/i })
    expect(actionBUtton).toBeInTheDocument()
    expect(actionBUtton).toHaveAttribute("href", "/")
  })
})
