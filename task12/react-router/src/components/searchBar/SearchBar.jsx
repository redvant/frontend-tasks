import './SearchBar.css'

function SearchBar({ handleChange }) {
  return (
    <div className='searchbar-container'>
      <input type="search" placeholder='search' onChange={handleChange} className="search-input"/>
    </div>
  )
}

export default SearchBar