
import Post from "./Post";

function PostList({ search, posts, showLoading, handleComments, handleDeletePost, onLogout }) {

    

    return (
        <div className="container flex-container">
            {showLoading
                ? <p className=" p-5">"Loading...😤"</p>
                : posts

                    .filter((post) => post.text.toLowerCase().includes(search.toLowerCase()))
                    .map((post, i) => (
                        <Post
                            key={i}
                            id={post.id}
                            image={post.image}
                            author={post.author.username}
                            text={post.text}
                            likes={post.likes}
                            comments={(post.comments).length}
                            createdAt={post.createdAt}
                            handleComments={handleComments}
                            handleDeletePost={handleDeletePost}
                            onLogout={onLogout} 
                        />
                    ))

                    }
        </div>
    )
}

export default PostList;

