import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NewsDetails = () => {
    const {id} = useParams()
    const news = useSelector((state)=> state.news)
    console.log("---",id);
    return (
        <div>
            DETAILS OF NEWS {id}
            {news.filter((news)=> news.id == id).map((news)=> (
                <div  key={news.id}> 
                    <h3>{news.title}</h3>
                    <p>{news.description}</p>
                    <img src={news.image} alt="news" height="200px" />
                </div>
            ))}
        </div>
    )
}

export default NewsDetails