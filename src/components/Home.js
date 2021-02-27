import Post from './Post';

const Home = ({ posts }) => {

   const { id, title, author, body } = posts;

   return (
      <div className="posts-list">
         <h2>Posts</h2>
         {posts.map((post) => (
            <Post key={post.id} {...post} />
         ))}
      </div>
   );
};

export default Home;