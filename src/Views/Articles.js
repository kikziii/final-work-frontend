import ArticleCardListEl from "../Components/ArticleCardListEl";
import useAxiosGet from '../Hooks/useAxiosGet';


function Articles() {
    const articles = useAxiosGet('articles');

    let content = '';
    if (articles.loading) {
        content = <h4>Loading ...</h4>
    } else if (articles.data.length === 0) {
        content = <h4>Oops, no articles to show</h4>
    } else {
        content = (
            <ul className="list-group">
                {articles.data.map((article) => <ArticleCardListEl key={article._id} article={article}/>)}
            </ul>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Articles;