import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './newsDetails.css'

const NewsDetails = () => {
    const {id} = useParams()
    const news = useSelector((state)=> state.news)
    const {title, image, description, longDesc} = news.find((newsItem) =>  newsItem.id == id)
console.log(longDesc, "KKKKKKK");
    return (
        <div className='newsDetailsContainer'>
             <h1 className='newsDetailsTitle'>{title}</h1>
             <img className='newsItemImage' src={image} alt={title}/>
             <h2 className='newsDetailsDesc'>{description}</h2> 
             <p className='longDescStyle'>{longDesc}</p>
             

        </div>
    )
}

export default NewsDetails
