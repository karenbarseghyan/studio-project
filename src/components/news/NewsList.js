import React from 'react'

const NewsList = ({news, title}) => {
    console.log(news)
    return (
        <div>
            <h1>{title}</h1>
            {news.map((news)=> (
                <div  key={news.id}> 
                    <h3>{news.title}</h3>
                    <p>{news.description}</p>
                </div>
            ))}
        </div>
    )
}

export default NewsList
