import Button from '@mui/material/Button';
import './Welcome.css'

function Welcome() {
  return (
    <div className='welcome-container'>
      <h1>Detect the text in images with AI</h1>
      <Button variant="contained">Start</Button>
    </div>
  )
}

export default Welcome