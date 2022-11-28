import React from 'react'

const SearchFilters = ({ englishFilter, setEnglishFilter }) => {

    function handleCheckbox (e) {
        setEnglishFilter(prev => !prev)
    }

    return (
        <div className="search-filters">
            <label htmlFor="english-checkbox">English Only:</label>
            <input id="english-checkbox" type="checkbox" value={englishFilter} onChange={handleCheckbox} />
        </div>
    )
}

export default SearchFilters
