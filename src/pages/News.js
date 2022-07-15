import React, { useState, useEffect } from 'react'

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
            News
        </div>
    )
}

export default News
