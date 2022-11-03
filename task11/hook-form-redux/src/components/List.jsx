import Card from "./Card";
import "./List.css"

function List({ list, title }) {
  const className = 'list ' + title.toLowerCase();

  return (
    <div className={className}>
      <h2>{title}</h2>
      {list.length > 0 ? (
        list.map((object, index) => <Card object={object} key={index} />)
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
}

export default List;