import { useParams } from "react-router-dom";
import ArticleLightbox from "../Components/ArticleLightbox";
import useAxiosGet from '../Hooks/useAxiosGet';


function Article() {

    const { articleId } = useParams();
    const articlesWithId = useAxiosGet(`articles/${articleId}`);

    let content = '';
    if (articlesWithId.loading) {
        content = <h4>Loading ...</h4>
    } else if (articlesWithId.data.length === 0) {
        content = <h4>Oops, no articles to show</h4>
    } else {
        content = <div dangerouslySetInnerHTML={{ __html: articlesWithId.data.content }}></div>
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-5">
                    <ArticleLightbox articlesWithId={articlesWithId}/>
                </div>
                <div className="col-md-7">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Article;