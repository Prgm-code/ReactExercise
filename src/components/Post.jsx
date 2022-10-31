import { useState } from 'react';
import { format } from 'timeago.js'
import { likePost } from '../components/service/data-service';
import { Link } from 'react-router-dom';

//build the post component
function Post({ image, author, text, likes, comments, createdAt, id ,handleComments ,handleDeletePost , onLogout}) {

    // set initial state for the likes 
    const [like, setLike] = useState(likes);

    function handleLike(event) {
        event.preventDefault();

        setLike(like + 1);
        likePost(id, like)
            .then(response => response.data)
            .then(data => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
                onLogout();
            })
            

    }

    function clickComment(event) {
       
        console.log(id)
        handleComments(id);
    }
    function clickDelete(event) {
        event.preventDefault();
        window.confirm('Are you sure you want to delete this post?');
        let postId = event.target.id;
       
        
        handleDeletePost(postId);
    }

    return (
        
        <div className="card d-flex  my-3   col-sm-10 col-12" >
            <img src={image} className="card-img-top" alt="..." />

            <div className="card-body">
                <div className="timeLike"><p className="card-text"><small className="text-muted">{format(createdAt)}</small></p>
                    <div id="like-btn">
                        <button onClick={handleLike} className=" btn btn-danger">
                            <i className="fa-sharp fa-solid fa-heart whiteincolor"> </i>
                            <span>{like}</span>
                        </button>

                    </div>
                </div>

                <h6 className="card-title"><strong>@{author}</strong></h6>
                <p className="card-text">{text}.</p>
                <div id="comments-btn">
                    <Link to={`/comments/${id}`} onClick={clickComment} className="btn btn-white"><i className="fa-regular fa-comment"></i> Comments ({comments})</Link>
                    <i className="fa-solid fa-trash fa-2x" id={id} onClick={clickDelete}></i>

                </div>

            </div>
        </div>
    );
}

export default Post;