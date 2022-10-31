
import PostList from "../PostList";
import SearchBar from "../SerchBar";

export function Home({onSearch, search, posts, showLoading, handleComments, handleDeletePost,setCommentId}) {

    return (


    <div>
        <SearchBar onSearch={onSearch} />
        <PostList search={search} posts={posts} showLoading={showLoading} handleComments={handleComments} setCommentId={setCommentId} handleDeletePost={handleDeletePost} />
    </div>
    )


}