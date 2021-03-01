import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NewPost from './components/NewPost';
import PostView from './components/PostView';
import NotFound from './components/NotFound';


function App() {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch('http://localhost:8000/posts');

        if (!res.ok) throw Error('Could not fetch data');

        const data = await res.json();
        
        setPosts(data);
      };

      fetchData()
    } catch (err) {
      console.error(err);
      setError(err.message);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="home">
          <Switch>
            <Route exact path="/">
              <Home 
                posts={posts}
                setPosts={setPosts}
                error={error}
              />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/newpost">
              <NewPost 
                posts={posts}
                setPosts={setPosts}
              />
            </Route>
            <Route path="/posts/:id">
              <PostView 
                posts={posts} 
                setPosts={setPosts}
              />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
