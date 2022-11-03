import Card from "./Card";

function List({ list }) {
  return (
    <div className="list">
      <h4>Submitted</h4>
      {list.length > 0 ? (
        list.map((person, index) => <Card person={person} key={index} />)
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
}

export default List;