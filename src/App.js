
import { useState, useEffect  } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import { getPosts, showUser, createComment, deleteComment, createPost, deletePost } from "./components/service/data-service";
import { Comments } from './components/Comments';
import { Routes, Route } from 'react-router';
import { Home } from './components/screens/Home';
import { Profiles } from './components/screens/Profiles';
import { useNavigate } from 'react-router-dom';





function App() {
  //set state initial for search bar
  const [search, setSearch] = useState('');
 
  // set the state for the posts
  const [posts, setPosts] = useState(null);

  const [showLoading, setShowLoading] = useState(true);

  const [token, setToken] = useState(localStorage.getItem('token'));


  const [loginOk, setLoginOk] = useState(false)

  const [id, setId] = useState('');

  const [currentUser, setCurrentUser] = useState({});

  const [comments, setComments] = useState(null);


  const [postId, setPostId] = useState('');

  const [commentId, setCommentId] = useState('');

  const [fetchNewComments, setFetchNewComments] = useState(false);

  const [createdPostmessage, setCreatedPostmessage] = useState(false);

  const [deletedPostmessage, setDeletedPostmessage] = useState(false);

  const [ message, setMessage ] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {  

      navigate('/login');
    }
  }, [token]);

        
  useEffect(() => {
    if (deletedPostmessage) {
      setTimeout(() => {
        setDeletedPostmessage(false);
      }, 5000);
    }
  }, [deletedPostmessage]) 


  useEffect(() => {
    if (createdPostmessage) {
      setTimeout(() => {
        setCreatedPostmessage(false)
      }, 5000)
    }
  }, [createdPostmessage]) //


  useEffect(() => {

    getPosts()
      .then((response) => {
        setLoginOk(true);
        console.log(response.data);
        setPosts(response.data);
        setShowLoading(false);
        setId('635dee318a1cce00169717dd'); // this is the id of the user logged in

      })
      .catch((error) => {
        onError(error);
      })
  }, [token]);


  useEffect(() => {
    showUser(id)
      .then(response => response.data)
      .then(data => {
        setCurrentUser(data);
      })
      .catch(error => {
        onError(error);

      });

  }, [id]);



  function updateComments(postId) {
    getPosts()

      .then((response) => {
        setPosts(response.data)
        console.log(response.data)
        setComments(response.data.find(post => post.id === postId).comments);
        setFetchNewComments(false);

      }
      )
      .catch((error) => {
        onError(error);
        setFetchNewComments(false);
      }
      )


  }

  function handleComments(id) {
    const comments = posts.find(post => post.id === id).comments;
    console.log(comments);
    setComments(comments);
   
    setPostId(id);

  }

  function handleCreateComment(payload, postId) {
    createComment(payload, postId)
      .then(response => response.data)
      .then(data => {
        console.log(data);
        updateComments(postId);

      })
      .catch(error => {
        onError(error);
        setFetchNewComments(false);
      })
  }

  function handleDeleteComment(postId, commentId) {

    deleteComment(postId, commentId)
    
      .then(response => response.data)
      .then(data => {
        setMessage('Comment deleted successfully');
        setDeletedPostmessage(true);
        console.log(data);
       
        updateComments(postId);
      })
      .catch(error => {
        onError(error);
      })
  }

  function handleCreatePost(payload) {
    createPost(payload)
      .then(response => response.data)
      .then(data => {
        console.log(data);
        setCreatedPostmessage(true);

      })
      .catch(error => {
        onError(error);
      })
  }

  function handleDeletePost(postId) {
    console.log('deleting', postId);

    deletePost(postId)

      .then(response => response.data)
      .then(data => {
        console.log(data);
        setMessage('Post deleted successfully');
        setDeletedPostmessage(true);

        getPosts()

          .then((response) => {
            setPosts(response.data);

          })
          .catch((error) => {
            onError(error);
          })
      })
      .catch(error => {
        onError(error);
      })
  }





  function onLoginComplete(state) {
    setLoginOk(state)

  }

  function onSearch(text) {
    setSearch(text);
  }


  function onLogout() {
    localStorage.removeItem('token');
    setToken(null);
    setLoginOk(false);

    setCurrentUser({});
    window.location.reload();

  }
  function onError(error) {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      setToken(null);
      setCurrentUser({});

      // window.location.href = '/login';
    } else {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Navbar deletedPostmessage={deletedPostmessage} message={message}/>

      <Routes>

        <Route path="/profile" element={
          <Profiles
            currentUser={currentUser}
            onLogout={onLogout}
            handleCreatePost={handleCreatePost}
            createdPostmessage={createdPostmessage} 
            />} />

        <Route path="/comments/:id" element={
        <Comments 
        comments={comments} 
        postId={postId} 
        setPostId={setPostId} 
        handleDeleteComment={handleDeleteComment} 
        fetchNewComments={fetchNewComments}
        setFetchNewComments={setFetchNewComments} 
        handleCreateComment={handleCreateComment} 
        
        />} />
        <Route path="/" element={
          <Home
            onSearch={onSearch}
            search={search}
            posts={posts}
            showLoading={showLoading}
            handleComments={handleComments}
            handleDeletePost={handleDeletePost}
            setCommentId={setCommentId}
          />}/>
        <Route path="/login" element={
        <Login setToken={setToken} onLoginComplete={onLoginComplete} 
        />} />

      </Routes>



      <Footer />
    </div>
  );
}

export default App;
