import React from 'react'
import { Link } from 'react-router-dom'

const NewsList = ({news, search, title}) => {
    console.log(news)
    return (
        <div>
            <h1>{title}</h1>
            {news.filter((news)=>news.title.toLowerCase().includes(search)).map((news)=> (
                <div  key={news.id}> 
                <Link to={`/news/${news.id}`}>
                    <h3>{news.title}</h3>
                    <p>{news.description}</p>
                </Link>  
                </div>
            ))}
        </div>
    )
}

export default NewsList
