import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

function ArticleCardListEl({article}) {
    const openArticle = () => {
        return `/article/${article._id}`
    }

    return (
        <div className="container mt-5 mb-5">
            <Card>
                <div className="row">
                    <div className="col-md-4">
                        <Card.Img variant="top" src={article.mainPicUrl} />
                    </div>
                    <div className="col-md-8">
                        <Card.Body>
                            <Card.Title><NavLink className="card-link" to={openArticle}>{article.title}</NavLink></Card.Title>
                            <Card.Text>{article.description}</Card.Text>
                            <NavLink className="nav-link float-right d-flex align-items-end" to={openArticle} >Read more</NavLink>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ArticleCardListEl;