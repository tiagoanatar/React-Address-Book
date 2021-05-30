const Search = ({ search, setSearch }) => {

  return (

    <div className='form-control search'>
    <input type='text' placeholder="Enter item to be searched" value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>

  )
}

export default Search
