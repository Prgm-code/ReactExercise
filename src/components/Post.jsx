

// function to get randon time on post time...
function timeRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}; 

//build the post component
function Post({ img, user, description, likes, comments }) {

    return (
        <div className="card d-flex m-3 mb-2   col-sm-10 col-12" >
            <img src={img} className="card-img-top" alt="..." />

            <div className="card-body">
                <div className="timeLike"><p className="card-text"><small className="text-muted">{timeRandom(1, 60)} mins ago</small></p>
                    <div id="like-btn">
                        <a href="" className=" btn btn-danger">
                            <i className="fa-sharp fa-solid fa-heart whiteincolor"> </i>
                            <span>{likes}</span>
                        </a>

                    </div>
                </div>

                <h6 className="card-title"><strong>@{user}</strong></h6>
                <p className="card-text">{description}.</p>
                <div id="comments-btn">
                    <a href="#" className="btn btn-white"><i className="fa-regular fa-comment"></i> Comments ({comments})</a>
                </div>

            </div>
        </div>
    );
}

export default Post;