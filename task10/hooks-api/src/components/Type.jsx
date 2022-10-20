import './Type.css'

function Type({type}) {
  const className = 'type ' + type.name.toLowerCase() + '-type';

  return <span className={className}>{type.name}</span>
}

export default Type