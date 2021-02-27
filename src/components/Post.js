const Post = ({ id, title, author, body }) => {

   return (
      <div className="post">
         <h3>{title}</h3>
         <p>{author}</p>
      </div>
   );
};

export default Post;