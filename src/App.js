import {useState, useRef} from 'react'
import SearchBar from './components/SearchBar'
import Gallery from './components/Gallery'
import { DataContext} from './Context/DataContext'
import { SearchContext } from './Context/SearchContext'

const App = () => {
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  let searchInput = useRef('')

  const API_URL = 'https://itunes.apple.com/search?term='


  const handleSearch = (e, term) => {
      e.preventDefault()
   //fetch data
      const fetchData = async () => {
        document.title = `${term} music`
        const response = await fetch(API_URL + term)
        const resData = await response.json()
        if (resData.results.length > 0) {
            return setData(resData.results)
        } else {
            return setMessage('Not Found.')
        }
    }
    fetchData()
  }
  // This function is fairly simple. We are passing two arguments: one of which is the default event object, the other will represent the search term we will generate by typing in our searchbar.

  return (
      <div>
        <SearchContext.Provider value ={{
         term: searchInput,
         handleSearch: handleSearch
        }}> 
        <SearchBar/>
        </SearchContext.Provider>
          {message}
          <DataContext.Provider value = {data}>
          <Gallery/>
          </DataContext.Provider>
      </div>
  )
}

export default App