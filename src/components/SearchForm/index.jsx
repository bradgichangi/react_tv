import React, { useState } from 'react'

const SearchForm = ({searchValue, setSearchValue}) => {

    const [ textInput, setTextInput ] = useState('')

    function handleChange (e) {
        setTextInput(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        setSearchValue(textInput)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='search-bar'>Search show: </label>
            <input id='search-bar' type="text" value={textInput} onChange={handleChange} required />
            <input type="submit" value="Search" />
        </form>
    )
}

export default SearchForm
