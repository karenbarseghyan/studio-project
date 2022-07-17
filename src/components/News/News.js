import { useEffect, useState } from 'react'
import NewsList from './NewsList'
import { useDispatch } from 'react-redux'
import { getNews } from '../../actions/news'
import { useSelector } from 'react-redux'

const News = () => {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const news = useSelector((state)=> state.news)

    useEffect(()=>{
        dispatch(getNews())
    },[dispatch])

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={e=>setSearch(e.target.value)}/>
            {news && <NewsList news={news} search={search} title="Latest News" />}
        </div>
    )
}

export default News
