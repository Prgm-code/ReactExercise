
function Post({ img, user, description }) {

    return (
        <div className="card d-flex m-3 mb-2 col-md-6 col-12" >
            <img src={img} className="card-img-top" alt="..." />

            <div className="card-body">
                <div className="timeLike"><p className="card-text"><small className="text-muted">3mins ago</small></p>
                    <div id="like-btn">
                        <a href=""className=" btn btn-danger"><i className="fa-sharp fa-solid fa-heart whiteincolor"> </i>43k</a>

                    </div>
                </div>

                <h6 className="card-title"><strong>@{user}</strong></h6>
                <p className="card-text">{description}.</p>
                <div id="comments-btn">
                    <a href="#" className="btn btn-white"><i className="fa-regular fa-comment"></i> Comments (15)</a>
                </div>

            </div>
        </div>
    );
}

export default Post;