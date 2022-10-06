
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SerchBar';
import PostList from './components/PostList';
import Footer from './components/Footer';





function App() {
  return (
    <div className="App">
      
      <Navbar />
      <SearchBar />
      <PostList />
      <Footer />
      
     
    </div>
  );
}

export default App;
