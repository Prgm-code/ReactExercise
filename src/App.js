
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SerchBar';
import PostList from './components/PostList';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Login from './components/Login';
import { getPosts } from "./components/service/data-service";

//mokup profile data
let profile = {
  avatar: "https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg",
  userName: "@Alex",
  bio: "Lorem ipsum dolor sit amet, sed do et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

function App() {
  //set state initial for search bar
  const [search, setSearch] = useState('');
  //set state initial for show profile or searchBar & posts
  const [showProfile, setShowProfile] = useState(false);
  // set the state for the posts
  const [posts, setPosts] = useState([]);

  const [showLoading, setShowLoading] = useState(true);

  const [token, setToken] = useState(localStorage.getItem('token'));


  const [loginOk  , setLoginOk] = useState(false)

  

  useEffect(() => {

    getPosts()
    .then((response) => {
      setLoginOk(true);
      console.log(response.data);
      setPosts(response.data);  
      setShowLoading(false);
      
    })
    .catch((error) => {
      localStorage.removeItem('token');
      setLoginOk(false);

      console.log(error);
      setToken(null);
    })
  }, [token]);

  function onLoginComplete (state) {
    setLoginOk(state)

  }

  function onSearch(text) {
    setSearch(text);
  }
  function onProfileClick() {
    setShowProfile(true);
  }
  function onLogoClick() {
    setShowProfile(false);
  }

  return (
    <div className="App">
      <Navbar onLogoClick={onLogoClick} onProfileClick={onProfileClick} />
      {token ? ( <div>
        {showProfile ? (
          <Profile avatar={profile.avatar} userName={profile.userName} bio={profile.bio} />
        ) : (
          <div>
            <SearchBar onSearch={onSearch} />
            <PostList search={search} posts={posts} showLoading={showLoading}/>
          </div>
        )}
      </div>

      ) : (
        <Login setToken={setToken} onLoginComplete={onLoginComplete} />
      )}

      <Footer />
    </div>
  );
}

export default App;
