import { expect, vi } from 'vitest'
import { render, screen } from '../../utils/test-utils'
import Input from './Input'

describe('Input', () => {
  const register = vi.fn()
  it('should render the label', () => {
    const testInput = { label: "Test", register }
    render(
      <Input input={testInput}/>
    )
    expect(screen.getByText(testInput.label)).toBeInTheDocument()
  })

  it('should render an input', () => {
    const testInput = { label: "Test", register }
    render(
      <Input input={testInput}/>
    )
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render a textarea', () => {
    const testInput = { label: "Test", type: "textarea", register }
    render(
      <Input input={testInput}/>
    )
    expect(screen.getByRole('textarea')).toBeInTheDocument()
  })
 })