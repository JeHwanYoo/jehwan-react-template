import TestRenderer from 'react-test-renderer'
import { Echo } from '../../src/components/Echo'
import { test, expect } from 'vitest'

test('Should render Echo Component with a message', () => {
  const renderer = TestRenderer.create(
    <Echo message={'Hello, React!'} />
  )

  const root = renderer.root

  expect(root?.children.at(0)).toEqual('Hello, React!')
})
