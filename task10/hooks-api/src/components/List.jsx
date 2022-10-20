import { useEffect, useState } from "react"
import Card from "./Card";
import './List.css'


function List() {
  const [list, setList] = useState()

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch('/pokemons.json');
      const json = await response.json();
      await sleep(3000);
      setList(json);
    }

    fetchData();
  }, [])

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  
  return (
    <div className="list">
      {list ? list.map(element => <Card key={element.id} object={element}/>) : <h2>loading</h2>}
    </div>
  )
}

export default List