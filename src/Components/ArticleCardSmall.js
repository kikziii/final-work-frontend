import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import useAxiosGet from '../Hooks/useAxiosGet';
import { NavLink } from 'react-router-dom';
import moment from 'moment';


function ArticleCardSmall() {
    const openArticle = (article) => {
        return `/article/${article._id}`
    }

    const articles = useAxiosGet('articles');

    let content = '';
    if (articles.loading) {
        content = <h4>Loading ...</h4>
    } else if (articles.data.length === 0) {
        content = <h4>Oops, no articles to show</h4>
    } else {
        content = (<CardDeck>
            {articles.data.map((article) => <Card>
                <Card.Img variant="top" src={article.mainPicUrl} />
                <Card.Body>
                    <Card.Title><NavLink className="card-link" to={openArticle(article)}>{article.title}</NavLink></Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Updated at {moment(article.updated).format('MMMM Do YYYY')}</small>
                </Card.Footer>
            </Card>)}
        </CardDeck>
        )
    }

    return (
        <div className="container mt-5 mb-5">
            <h3>Top articles this month </h3>
            <div className="mt-4">{content}</div>
        </div>
    )
}

export default ArticleCardSmall;