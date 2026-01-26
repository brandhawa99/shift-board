import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ReviewCard from '@/components/ReviewCard'
import '@testing-library/jest-dom/vitest'
import { Carousel } from '@/components/ui/carousel'

describe('Review', () => {
  it('renders a review card', () => {
    render(
      <Carousel>
        <ReviewCard
          id={1}
          location="vancouver"
          name={'hello'}
          rating={2}
          review={'this is a review'}
        />
      </Carousel>,
    )
    expect(screen.getByText('this is a review')).toBeInTheDocument()
    expect(screen.getByText('vancouver')).toBeInTheDocument()
    expect(screen.getByText('hello')).toBeInTheDocument()
    expect(screen.getByText('⭐⭐')).toBeInTheDocument()
  })
  it('renders a review card without location', () => {
    render(
      <Carousel>
        <ReviewCard
          id={2}
          location="city"
          name={'hello'}
          rating={2}
          review={'this is a review'}
        />
      </Carousel>,
    )
    expect(screen.getByText('this is a review')).toBeInTheDocument()
    expect(screen.getByText('hello')).toBeInTheDocument()
    expect(screen.getByText('⭐⭐')).toBeInTheDocument()
  })
})
