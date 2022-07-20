import React from 'react'
import { Link } from 'react-router-dom'
import './newsItem.css'

const NewsItem = ({image, title, description, id}) => {
    return (
        <div>                
            <div  className='newsItemWrapper' key={id}> 
                <Link to={`/news/${id}`}>
                    <img className='newItemImage' src={image} alt={title}/>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </Link>
            </div>
        </div>
    )
}

export default NewsItem