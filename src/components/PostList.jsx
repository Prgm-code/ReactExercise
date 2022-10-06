import Post from "./Post";

// example of a post object
const posts = [
    {
        img: "https://jmperezperez.com/static/images/posts/svg-placeholders/pexels-photo-281184-square.jpg",
        user: "user 1",
        description: "Lorem Lorem dolor aliquip excepteur adipisicing proident labore sit excepteur. Qui mollit tempor consequat fugiat occaecat. Eu ut consectetur consectetur excepteur nisi ullamco deserunt. Eu anim aliquip laborum proident fugiat. Sunt pariatur do exercitation proident ex. Irure eu et do irure ex anim irure mollit minim voluptate non. Commodo sit magna do sit amet do dolore ullamco. ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        likes: "43k",
        comments: "15"

    },
    {
        img: "https://picsum.photos/200/300",
        user: "user 2",
        description: "Duis reprehenderit do et ad pariatur. Ad labore nostrud ipsum officia aute aliquip ex duis anim voluptate nulla ipsum est exercitation. Dolor elit esse nisi incididunt reprehenderit duis ut. Eiusmod commodo deserunt veniam voluptate cillum non officia cupidatat eu Lorem id. Fugiat est eu do exercitation magna ea mollit consequat minim. Duis ipsum do ut culpa quis id cillum magna magna. excepteur aliqua aliqua irure. Aute amet nisi est veniam. Dolore elit eu sint laborum ut.",
        likes: "12k",
        comments: "5"


    },
    {
        img: "https://picsum.photos/200",
        user: "user 3",
        description: "Ad aliquip velit excepteur ad. Quis pariatur elit excepteur ipsum laboris veniam incididunt. Fugiat enim deserunt voluptate laboris. Eiusmod adipisicing veniam reprehenderit deserunt mollit excepteur minim fugiat ullamco officia elit.",
        likes: "200",
        comments: "10"


    },
    {
        img: "https://picsum.photos/200/300",
        user: "user 4",
        description: "Qui qui occaecat dolor velit est et velit nisi incididunt occaecat qui. Velit fugiat officia aute ex ad sint cupidatat esse ex ullamco nisi fugiat. Nostrud culpa non quis ullamco. Ullamco commodo amet tempor excepteur. Velit amet deserunt irure elit consectetur ut ullamco aute ea ex Lorem. Do reprehenderit aute occaecat enim laboris voluptate. Occaecat magna dolore quis culpa laboris sit Lorem cupidatat esse ut cillum velit pariatur..",
        likes: "1k",
        comments: "1"
    },

    {   img: "https://picsum.photos/200",
        user: "user 5",
        description: "Aliquip eiusmod tempor eu fugiat qui irure velit do nulla deserunt eu. Ipsum et enim laboris sit adipisicing dolore pariatur ad deserunt excepteur minim reprehenderit sit. Nulla eiusmod quis dolor fugiat sit laboris veniam sunt excepteur enim.",
        
        likes: "43k",
        comments: "15"  
    },
    {
        img: "https://picsum.photos/200/300",
        user: "user 6",
        description: "Adipisicing ut magna velit voluptate ut ea eu voluptate. Laborum enim incididunt veniam duis enim. Quis occaecat in ad sit sint ad exercitation ut commodo dolor consectetur nostrud quis eu.",
        likes: "12k",
        comments: "5"

    }   
];

// map the posts array to a list of Post components
function PostList() {
    return (
        <div className="container">
            {posts.map((post, i) => (
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
    );
}

export default PostList;

