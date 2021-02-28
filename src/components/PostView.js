import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PostView = ({ posts, setPosts }) => {

   const [post, setPost] = useState([]);
   
   const { id } = useParams();
   const history = useHistory();

   useEffect(() => {
      const fetchPost = async (id) => {
         const res = await fetch(`http://localhost:8000/posts/${id}`)
         const data = await res.json();

         setPost(data);
      };

      fetchPost(id);
   }, [id, setPost])
   
   const deleteHandler = async (id) => {
      console.log(posts)
      await fetch(`http://localhost:8000/posts/${id}`, { method: 'DELETE' })

      const res = await fetch('http://localhost:8000/posts');
      const data = await res.json();
      setPosts(data);
      history.push('/');
   };

   return (
      <div className="post-view">
         <h3>{post.title}</h3>
         <p className="author">{post.author}</p>
         <p className="body">{post.body}</p>
         {post && <button onClick={() => deleteHandler(id)}>Delete Post</button>}
      </div>
   );
};

export default PostView;