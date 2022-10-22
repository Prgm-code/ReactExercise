import { useEffect , useState} from "react";
import Post from "./Post";
import { getPosts } from "./service/data-service";

const initialPosts = []


// map the posts array to a list of Post components
function PostList({ value }) {


    const [posts, setPosts] = useState(initialPosts);

    useEffect(() => {
        getPosts().then((posts) => {
            setPosts(posts);
        });

        }, initialPosts);

        return (
            <div className="container">
                {posts === initialPosts
                    ? <p className=" p-5">"Loading...😤"</p>
                    : posts

                        .filter((post) => post.description.toLowerCase().includes(value.toLowerCase()))
                        .map((post, i) => (
                            <Post
                                key={i}
                                img={post.img}
                                user={post.user}
                                description={post.description}
                                likes={post.likes}
                                comments={post.comments}
                            />
                        ))}

            </div>
        )
    }

export default PostList;

