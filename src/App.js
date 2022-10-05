
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SerchBar';
import PostList from './components/PostList';





function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <PostList />


      {/* <EpisodesList /> */}
    
    </div>
  );
}

export default App;
