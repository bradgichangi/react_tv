import React from 'react'
import { Rating } from '../'


const TvShowCard = ({data}) => {
    return (
        <div className="show-card">
            <h2>{ data.name }</h2>
            { data.image && <img src={data.image.medium} alt={data.name} /> }
            <em>{ data.genres[0] }</em>
            <div dangerouslySetInnerHTML={{__html: data.summary}}></div>
            <Rating data = {data.rating} />
            {  data.externals.imdb && <a target='blank' href={`https://www.imdb.com/title/${data.externals.imdb}`}>IMDB</a>}

        </div>
    )
}

export default TvShowCard
