import { expect } from 'vitest'
import { render, screen } from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './Sidebar'

describe('Sidebar', () => {
  it('should render the sidebar', async () => {
    render(
      <Sidebar />, {wrapper: BrowserRouter}
    )
    expect(screen.getByText('Posts Manager')).toBeInTheDocument()
  })
 })