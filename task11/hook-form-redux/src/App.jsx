import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'

function App() {
  const [people, setPeople] = useState([])

  function addPerson(person){
    setPeople([...people, person])
  }

  return (
    <div className="App">
      <Form addPerson={addPerson} />
      <List list={people} />
    </div>
  )
}

export default App
