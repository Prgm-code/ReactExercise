
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SerchBar';
import PostList from './components/PostList';
import Footer from './components/Footer';
import Profile from './components/Profile';




function App() {
  const [value, setValue] = useState('');

  function onSearch(text) {
    setValue(text);
  }
 

  return (
    <div className="App">
      
      <Navbar />
     {/*  <Profile /> */}
    
      <SearchBar value={value} onSearch={onSearch}/>
      <PostList  value={value}/>
      <Footer />
      
     
    </div>
  );
}

export default App;
