import { SRLWrapper } from "simple-react-lightbox";

function ArticleLightbox({ articlesWithId }) {


    let content = '';
    if (articlesWithId.loading) {
        content = <h4>Loading ...</h4>
    } else if (articlesWithId.data.length === 0) {
        content = <h4>Oops, no articles to show</h4>
    } else {
        content = (
            <SRLWrapper>
                    <div className="row pb-4">
                        <div className="col-md-12">
                            <a href={articlesWithId.data.mainPicUrl}>
                                <img className="lightbox-img-sm" src={articlesWithId.data.mainPicUrl} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        {articlesWithId.data.picUrl.map((pic) =>
                            <div className="col-md-6">
                                <a href={pic}>
                                    <img className="lightbox-img-sm" src={pic} alt="" />
                                </a>
                            </div>
                )} </div>
            </SRLWrapper>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default ArticleLightbox;