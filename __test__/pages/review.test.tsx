import { render, screen } from '@testing-library/react'
import Review from '@/pages/review'
import '@testing-library/jest-dom'
import React from 'react'

describe('Notice', () => {
  it('renders a heading tag', () => {
    render(<Review />)

    const button = screen.getByRole('div');
    expect(button).toHaveClass('false');
  })
})