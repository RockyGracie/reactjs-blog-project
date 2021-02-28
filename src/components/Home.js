import Posts from './Posts';

const Home = ({ posts, setPosts, error }) => {

   const newBlogs = () => {
      
   }

   return (
      <div className="posts-list">
         <h2>Posts</h2>
         {error && <p>{error}</p>}
         {posts && posts.map((post) => (
            <>
            <Posts key={post.id} setPosts={setPosts} {...post} />
            </>
         ))} 
      </div>
   );
};

export default Home;