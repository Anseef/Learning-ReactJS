const BlogList = ({blogs,title}) => {
    return (
        <div className="blog-list">
            <h1 className="blogHeading">{ title }</h1>
            {blogs.map((blog) => (
                <div className='blog-frame' key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>{ blog.body }</p>
                    <small>Written by { blog.author }</small>
                </div>
            ))}
        </div> 
     );
}
export default BlogList;