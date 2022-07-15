import { useState } from 'react'
import NewsList from '../components/news/NewsList'
import useFetch from '../useFetch'

const News = () => {
    const { data: news } = useFetch('http://localhost:8000/news')
    const [search, setSearch] = useState("")
    return (
        <div>
            <input type="text" placeholder="Search..." onChange={e=>setSearch(e.target.value)}/>
            {news && <NewsList news={news} search={search} title="Latest News" />}
        </div>
    )
}

export default News
