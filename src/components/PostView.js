import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PostView = () => {

   const [post, setPost] = useState([]);
   
   const { id } = useParams();

   useEffect(() => {
      const fetchPost = async (id) => {
         const res = await fetch(`http://localhost:8000/posts/${id}`)
         const data = await res.json();

         setPost(data);
      }

      fetchPost(id);
   }, [id, setPost])

   return (
      <div className="post-view">
         <h3>{post.title}</h3>
         <p className="author">{post.author}</p>
         <p className="body">{post.body}</p>
      </div>
   );
};

export default PostView;