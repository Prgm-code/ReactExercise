import Post from "./Post";

const posts = [
    {
        img: "https://jmperezperez.com/static/images/posts/svg-placeholders/pexels-photo-281184-square.jpg",
        user: "user 1",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        img: "https://jmperezperez.com/static/images/posts/svg-placeholders/pexels-photo-281184-square.jpg",
        user: "user 2",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."

    },
    {
        img: "https://jmperezperez.com/static/images/posts/svg-placeholders/pexels-photo-281184-square.jpg",
        user: "user 3",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."

    }
];


function PostList() {
    return (
        <div className="container">
            {posts.map((post, i) => (
                <Post
                    key={i}
                    img={post.img}
                    user={post.user}
                    description={post.description}
                />
            ))}
        </div>
    );
}

export default PostList;

