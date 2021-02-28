import { Link } from 'react-router-dom';

const Posts = ({ id, title, author, body }) => {
   
   return (
      <div className="post">
         <Link to={`/posts/${id}`}>
            <h3>{title}</h3>
            <p>{author}</p>
         </Link>
      </div>
   );
};

export default Posts;