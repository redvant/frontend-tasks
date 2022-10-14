import './App.css'
import Card from './components/Card';

function App() {
  
  const bootcampers = ['Diego','Edgar','Esteban','Joaquin','Jose','Xochihua'];

  return (
    <div className="App">
      <h1 className='Title'>Bootcampers</h1>
      {bootcampers.map(camper => <Card key={camper} camper={camper}/>)}
    </div>
  )
}

export default App
