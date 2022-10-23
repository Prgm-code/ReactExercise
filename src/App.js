
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SerchBar';
import PostList from './components/PostList';
import Footer from './components/Footer';
import Profile from './components/Profile';
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

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });

  }, []);

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
      {showProfile ? (
        <Profile avatar={profile.avatar} userName={profile.userName} bio={profile.bio} />
      ) : (
        <>
          <SearchBar onSearch={onSearch} />
          <PostList search={search} posts={posts} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
