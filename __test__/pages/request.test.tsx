import { render, screen } from '@testing-library/react'
import Request from '@/pages/request'
import '@testing-library/jest-dom'
import React from 'react'

describe('Request', () => {
  it('renders a heading tag', () => {
    render(<Request />)

    const heading = screen.getByTestId('title')
    const headingText = 'Request';
    expect(heading).toHaveTextContent(headingText);
  })
})