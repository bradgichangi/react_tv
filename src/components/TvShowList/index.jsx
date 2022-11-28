import React, { useState , useEffect } from 'react'
import { TvShowCard } from '../'
import axios from 'axios'


const TvShowList = ({ searchValue, englishFilter }) => {

    const [ showData, setShowData ] = useState([])

    const [ loading, setLoading ] = useState(false)

    useEffect(() => {

        setLoading(true)

        async function getTvData () {
            const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
            setShowData(response.data)
            setLoading(false)
        }

        getTvData()
    }, [searchValue])

    function displayShows () {
        return showData
        .filter(show => (!englishFilter || show.show.language == 'English'))
        .map((show, index) => <TvShowCard key = {index} data = {show.show}/>) 
    }

    return (
        <div className='show-list'>
            { loading ? <h2>Loading...</h2> : displayShows()}
        </div> 
    )
}

export default TvShowList
