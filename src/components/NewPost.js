const NewPost = () => {
   return (
      <div className="newpost">
         <h2>New Post</h2>
         <form className="form">
            <div className="form-control">
               <label htmlFor="title">Title</label>
               <input 
                  type="text" 
                  id="title" 
                  placeholder="Title..." 
               />
            </div>
            <div className="form-control">
               <label htmlFor="author">Author</label>
               <input 
                  type="text" 
                  id="author" 
                  placeholder="Author..." 
               />
            </div>
            <div className="form-control">
               <label htmlFor="body">Body</label>
               <textarea 
                  id="body" 
                  cols="30" 
                  rows="10" 
               />
            </div>
            <button type="submit">Add Post</button>
         </form>
      </div>
   );
};

export default NewPost;