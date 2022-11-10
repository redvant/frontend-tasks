import { useRouteError } from 'react-router-dom'
import './Error.css'

function Error() {
  const error = useRouteError();
  return (
    <div>
      <p>Error Page</p>
      <h4>{error.status} {error.statusText}</h4>
    </div>
  )
}

export default Error