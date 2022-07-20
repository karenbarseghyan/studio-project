import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './newsDetails.css'
import { getNewsItem } from '../../actions/newsItem'

const NewsDetails = () => {
    const newsItem = useSelector((state)=> state.newsItem)
    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect(()=>{
        dispatch(getNewsItem(id));
    },[id])

    return (
        <div className='newsDetailsContainer'>
             <h1 className='newsDetailsTitle'>{newsItem.title}</h1>
             <img className='newsItemImage' src={newsItem.image} alt={newsItem.title}/>
             <h2 className='newsDetailsDesc'>{newsItem.description}</h2> 
             <p className='longDescStyle'>{newsItem.longDesc}</p>
        </div>
    )
}

export default NewsDetails
