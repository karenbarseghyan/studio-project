import NewsItem from "../newsItem/NewsItem";
import { useNavigate } from 'react-router-dom'
import './newsList.css'

const NewsList = ({newsList, search}) => {
    
    const navigate = useNavigate();
    const openNews = () => {
        console.log("newsssList", newsList)
        navigate(`./news/${newsList.id}`)
        
    }
     
    return (
        <div className='newsListWrapper'>
            {newsList.map(({title, id})=>(
                <NewsItem key={id} onClick={openNews} />
            ))}
           {newsList.length > 0 && newsList.filter((news)=>news.title.toLowerCase()
           .includes(search))
           .map(({image, title, description, id})=> (
                <div  key={id}> 
                    <NewsItem
                        onClick={openNews}
                        id={id}
                        image={image}
                        title={title}
                        description={description}
                        />
                </div>
            ))}
        </div>
    );
}

export default NewsList;