import React, { useState } from 'react'
import { TitleBar, TvShowList, SearchForm, SearchFilters } from './components'
import './app.css'


const App = () => {

    const [ searchValue, setSearchValue ] = useState('') 
    const [ englishFilter, setEnglishFilter ] = useState(false) 

    return (
        <>
        <TitleBar />
        <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
        <SearchFilters englishFilter={englishFilter} setEnglishFilter={setEnglishFilter} />
        <TvShowList searchValue={searchValue} englishFilter={englishFilter} />
        </>
    )
}

export default App
