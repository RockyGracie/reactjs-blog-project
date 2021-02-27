import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  const [posts, setPosts] = useState([]);
  
  const fetchData = async () => {
    const res = await fetch('http://localhost:8000/posts');
    const data = await res.json();
    
    setPosts(data);
  };

  useEffect(() => fetchData(), []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="home">
          <Switch>
            <Route exact path="/">
              <Home posts={posts} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
