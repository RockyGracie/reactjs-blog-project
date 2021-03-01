import Posts from './Posts';

const Home = ({ posts, setPosts, error }) => {


   return (
      <div className="posts-list">
         <h2>Posts</h2>
         {error && <p>{error}</p>}
         {posts && posts.map((post) => (
            <Posts key={post.id} posts={posts} {...post} />            
         ))} 
      </div>
   );
};

export default Home;