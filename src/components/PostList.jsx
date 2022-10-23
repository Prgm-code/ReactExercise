import { useState } from "react";
import Post from "./Post";

function PostList({ search, posts }) {

    const [showLoading, setShowLoading] = useState(true);

    // mockup data loading delay  
    new Promise((resolve) => setTimeout(resolve, 3000)).then(() => {
        setShowLoading(false);
    });

    return (
        <div className="container">
            {showLoading
                ? <p className=" p-5">"Loading...😤"</p>
                : posts

                    .filter((post) => post.description.toLowerCase().includes(search.toLowerCase()))
                    .map((post, i) => (
                        <Post
                            key={i}
                            image={post.img}
                            author={post.user}
                            text={post.description}
                            likes={post.likes}
                            comments={post.comments}
                            createdAt={post.createdAt}
                        />
                    ))}
        </div>
    )
}

export default PostList;

