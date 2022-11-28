import React from 'react'

const Rating = ({data}) => {
    return (
        <p>{'⭐'.repeat(data.average)}</p>
    )
}

export default Rating
