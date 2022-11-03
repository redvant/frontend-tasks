import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'
import { useSelector, useDispatch} from 'react-redux';
import { add, remove } from './slices/errorSlice'

function App() {
  const [people, setPeople] = useState([])
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  
  const setError = async (error) => {
    dispatch(add({input: error[0], message: error[1].message}));
    await sleep(5000)
    removeError()
  }

  const removeError = () => {
    dispatch(remove());
  }

  function addPerson(person){
    setPeople([...people, person])
  }

  return (
    <div className="App">
      <List list={error} title="Errors"/>
      <Form addPerson={addPerson} handleError={setError} />
      <List list={people} title="Submitted"/>
    </div>
  )
}

export default App
