import NewsItem from "../newsItem/NewsItem";
import { useParams } from 'react-router-dom'
import './newsList.css'

const NewsList = ({newsList, search}) => {
    const {id} = useParams()
    return (
        <div className='newsListWrapper'>
           {newsList.length > 0 && newsList.filter((news)=>news.title.toLowerCase()
           .includes(search))
           .map(({image, title, description, id})=> (
                <div  key={id}> 
                    <NewsItem 
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