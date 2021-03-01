import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewPost = ({ posts, setPosts }) => {

   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');
   const [body, setBody] = useState('');
   const [isPending, setIsPending] = useState(false);

   const history = useHistory();

   const postRequest = async (e) => {
      e.preventDefault();

      const newPost = { title, author, body };

      const res = await fetch('http://localhost:8000/posts', {
         method: 'POST',
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(newPost)
      });

      const data = await res.json();

      setPosts([...posts, data])
      history.push('/')
      setTitle('');
      setAuthor('');
      setBody('');

   };

   return (
      <div className="newpost">
         <h2>New Post</h2>
         <form className="form" onSubmit={postRequest}>
            <div className="form-control">
               <label htmlFor="title">Title</label>
               <input 
                  type="text" 
                  id="title" 
                  placeholder="Title..." 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
            </div>
            <div className="form-control">
               <label htmlFor="author">Author</label>
               <input 
                  type="text" 
                  id="author" 
                  placeholder="Author..." 
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
               />
            </div>
            <div className="form-control">
               <label htmlFor="body">Body</label>
               <textarea 
                  id="body" 
                  cols="30" 
                  rows="10" 
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
               />
            </div>
            {isPending && <button type="submit" disabled>Wait...</button>}
            {!isPending && <button type="submit">Add Post</button>}
         </form>
      </div>
   );
};

export default NewPost;