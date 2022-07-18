import { useEffect, useState } from 'react'
import NewsList from '../newsList/newsList'
import { useDispatch } from 'react-redux'
import { getNews } from '../../actions/news'
import { useSelector } from 'react-redux'
import './news.css'

const News = () => {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const news = useSelector((state)=> state.news)

    useEffect(()=>{
        dispatch(getNews())
    },[dispatch])

    return (
        <div className='newContainer'>
            <input className="searchBar" type="text" placeholder="Search news..." onChange={e=>setSearch(e.target.value)}/>
            <h2 className='newsTitle'>News list</h2>
             {news && <NewsList newsList={news} search={search}/>}
        </div>
    )
}

export default News
