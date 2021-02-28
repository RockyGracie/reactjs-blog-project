import Posts from './Posts';

const Home = ({ posts, error }) => {

   const { id, title, author, body } = posts;

   return (
      <div className="posts-list">
         <h2>Posts</h2>
         {error && <p>{error}</p>}
         {posts && posts.map((post) => (
            <Posts key={post.id} {...post} />
         ))} 
      </div>
   );
};

export default Home;