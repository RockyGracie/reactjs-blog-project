import { Link } from 'react-router-dom';

const Posts = ({ id, title, author, setPosts }) => {


   return (
      <div className="post">
         <Link to={`/posts/${id}`} className="post-link">
            <h3>{title}</h3>
            <p>{author}</p>
         </Link>
      </div>
   );
};

export default Posts;