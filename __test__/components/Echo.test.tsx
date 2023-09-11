import { Echo } from '../../src/components/Echo'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

test('Should render Echo Component with a message', () => {
  render(<Echo message={'Hello, React!'} />)
  expect(screen.getByText('Hello, React!')).toBeInTheDocument()
})
