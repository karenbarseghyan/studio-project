import React, { useState, useEffect } from 'react'
import NewsList from '../components/news/NewsList'

const News = () => {
    const [news, setNews] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:8000/news')
        .then(res => {
            return res.json()
            .then(data => {
                setNews(data)
            })
        })
    }, [])

    return (
        <div>
            {news && <NewsList news={news} title="Latest News" />}
        </div>
    )
}

export default News
