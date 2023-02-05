import { useContext } from 'react'
import { SearchContext } from '../Context/SearchContext'


export default function SearchBar(){
  
const{term, handleSearch} = useContext(SearchContext)
    return (
        <form>

            <input type="text" ref={term} placeholder="Enter a search term here" />
            <button onClick={(e) => handleSearch(e, term.current.value)} type="submit"> Submit!</button>
        </form>
    )
}
