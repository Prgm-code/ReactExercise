
import { useState, useEffect } from "react";
import { format } from "timeago.js";
import { useParams } from "react-router";
import { Link } from "react-router-dom";








export function Comments({ comments, handleCreateComment, postId, handleDeleteComment, fetchNewComments, setFetchNewComments, setPostId}) {

    const { id } = useParams(); // get the id from the url
   


    const [addComment, setAddComment] = useState("");



    function handleAddComment(event) {
        event.preventDefault();
    
        setAddComment(event.target.value);

    }
    function handleSubmitComment(event) {
        event.preventDefault();
        console.log(addComment);


        handleCreateComment({ "text": addComment }, postId);
        setAddComment("");
        setFetchNewComments(true)
        //clear the input field


    }

    function handleDeleteButton(event) {

        event.preventDefault();
        window.confirm("Are you sure you want to delete this comment?");

        console.log(event.target.id)
        console.log(postId)
        setFetchNewComments(true);
        handleDeleteComment(postId, event.target.id);


    }


    //


    if (comments.length > 0) {

        return (

            <div className="container ">
                <h2 className="text-center mt-3 mb-2" >Comments </h2>
                {comments.map((comment, i) => (


                    <div className="card d-flex  my-3  col-sm-10 col-12" key={i} id={comments.id}>
                        <div className="card-body">
                            <h6 className="card-title"><strong>@{comment.user.username}</strong></h6>
                            <p className="card-text">{comment.text}.</p>
                            <div className="form-group comment-button">
                                <p className="card-text"><small className="text-muted">{format(comment.createdAt)}</small></p>

                                <button className="btn btn-danger " id={comment.id} onClick={handleDeleteButton} >Delete</button>
                            </div>

                        </div>
                    </div>
                ))}
                <form id="comment-form " className=" my-3   col-sm-10 col-12">
                    <div className="form-group">

                        {fetchNewComments ? (<div className="form-spinner">

                            <div className="lds-spinner" style={{}} ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </div>


                        ) : (<>
                            <label htmlFor="exampleFormControlTextarea1">Add a comment</label>

                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleAddComment}></textarea>

                        </>)}



                    </div>
                    <div className="form-group comment-button ">

                        <Link to={"/"} type="submit" className="btn btn-primary" >Return <i className="fa-solid fa-rotate-left"></i></Link>
                        <button type="submit" className="btn btn-success " onClick={handleSubmitComment}>Submit</button>
                    </div>


                </form>





            </div>
        )
    } else {
        return (
            <div className="container ">

                <p className=" p-5">"No comments yet 😢"</p>


                <form>
                    <div className="form-group">
                        {fetchNewComments ? (<div className="form-spinner">

                            <div className="lds-spinner" style={{}} ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </div>


                        ) : (<>
                            <label htmlFor="exampleFormControlTextarea1">Add a comment</label>

                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleAddComment}></textarea>

                        </>)}


                    </div>


                    <div className="form-group comment-button">



                        <Link to={"/"} type="submit" className="btn btn-primary" >Return <i className="fa-solid fa-rotate-left"></i></Link>
                        <button type="submit" className="btn btn-success " onClick={handleSubmitComment}>Submit</button>
                    </div>


                </form>
            </div>
        )
    }

}