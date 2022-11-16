import { expect } from 'vitest'
import { render, screen } from '../../utils/test-utils'
import Alerts from './Alerts'

describe('Alert', () => {
  it('should render a success alert', () => {
    const testAlerts = [{message:"Test Alert", status: "success"}]
    render(
      <Alerts alerts={testAlerts}/>
    )
    expect(screen.getByText(testAlerts[0].message)).toBeInTheDocument()
    expect(screen.getByTestId('alert')).toHaveClass(testAlerts[0].status)
  })

  it('should render an error alert', () => {
    const testAlerts = [{message:"Test Alert", status: "error"}]
    render(
      <Alerts alerts={testAlerts}/>
    )
    expect(screen.getByText(testAlerts[0].message)).toBeInTheDocument()
    expect(screen.getByTestId('alert')).toHaveClass(testAlerts[0].status)
  })

  it('should not render any alert', () => {
    const testAlerts = []
    render(
      <Alerts alerts={testAlerts}/>
    )
    expect(screen.queryByTestId('alert')).toBeNull()
  })
 })