import { useState } from 'react';
import { format } from 'timeago.js'

//build the post component
function Post({ image, author, text, likes, comments, createdAt }) {

    // set initial state for the likes 
    const [like, setLike] = useState(likes);

    return (
        <div className="card d-flex m-3 mb-2   col-sm-10 col-12" >
            <img src={image} className="card-img-top" alt="..." />

            <div className="card-body">
                <div className="timeLike"><p className="card-text"><small className="text-muted">{format(createdAt)}</small></p>
                    <div id="like-btn" >
                        <button onClick={() => {
                            setLike(like + 1);
                        }} className=" btn btn-danger">
                            <i className="fa-sharp fa-solid fa-heart whiteincolor"> </i>
                            <span>{like}</span>
                        </button>

                    </div>
                </div>

                <h6 className="card-title"><strong>@{author}</strong></h6>
                <p className="card-text">{text}.</p>
                <div id="comments-btn">
                    <a href="#" className="btn btn-white"><i className="fa-regular fa-comment"></i> Comments ({comments})</a>
                </div>

            </div>
        </div>
    );
}

export default Post;