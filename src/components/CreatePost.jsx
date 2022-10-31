import { useState } from "react";


export function CreatePost({ handleCreatePost ,createdPostmessage }) {
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);

   

    function handleText(event) {
        event.preventDefault();
        setText(event.target.value);

    }
    function handleImage(event) {

        event.preventDefault();
        setImage(event.target.files[0]);
        console.log(event.target.files[0]);

    }
    function handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append("image", image);
        formData.append("text", text);

        
        
        handleCreatePost(formData);
        setText("");
        setImage("");
    }

    return (
    
    <div>
        <br />

        <div className="row col flex-container">
            <div className="col-12 col-sm-6 col-md-6 ">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Create a Post</h5>
                        { createdPostmessage ? <div className="alert alert-success" role="alert">Post Created!</div> : null }
                        <form onSubmit={handleSubmit}>  
                            <div className="form-group">
                                <label htmlFor="text">Text</label>
                                <input type="text" className="form-control" id="text" placeholder="Enter text" value={text} onChange={handleText} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Image</label>
                                <input type="file" className="form-control" id="image" placeholder="Enter image" onChange={handleImage} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

/* 
            <div className="col-md-3 mt-3">
                <form id="card-form" className="card card-body shadow">

                    <div className="input-group mb-2">
                        <input type="file" id="image-input" className="form-control" onChange={handleImage} value ={image}/>

                    </div>
                   
                    <div className="input-group mb-2">
                        <textarea name="" id="comments" cols={50} rows={2} placeholder="please enter text" onChange={handleText} value={text}></textarea>
                    </div>
                   
                    <button className="btn btn-primary" id="createBottom" onClick={handleSubmit}>
                        Create Post
                    </button>


                </form>
            </div>


        </div>
    </div>

        )
} */