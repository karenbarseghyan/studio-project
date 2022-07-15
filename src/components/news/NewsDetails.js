import React from 'react'
import { useParams } from 'react-router-dom'

const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
            DETAILS OF NEWS {id}
        </div>
    )
}

export default NewsDetails
