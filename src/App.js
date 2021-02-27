import './App.css'
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Home from './components/Home';

function App() {

  const [posts, setPosts] = useState([]);
  
  const fetchData = async () => {
    const res = await fetch('http://localhost:8000/posts');
    const data = await res.json();
    
    setPosts(data);
  };

  useEffect(() => fetchData(), []);

  return (
    <div className="App">
      <Header />
      <Home posts={posts} />
    </div>
  );
};

export default App;
