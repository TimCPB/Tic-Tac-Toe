import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import App from './App'

test('Shows Yo world!', () => {
  render(<App />)

  expect(screen.getByText(/Yo world!/)).toBeInTheDocument()
})