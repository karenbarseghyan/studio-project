import NewsList from '../components/news/NewsList'
import useFetch from '../useFetch'

const News = () => {
    const { data: news } = useFetch('http://localhost:8000/news')

    return (
        <div>
            {news && <NewsList news={news} title="Latest News" />}
        </div>
    )
}

export default News
