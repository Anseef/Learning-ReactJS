import { Link } from "react-router-dom";
const BlogList = ({blogs,title}) => {
    return (
        <div className="blog-list">
            <h1 className="blogHeading">{ title }</h1>
            {blogs.map((blog) => (
                <div className='blog-frame' key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <small>Written by { blog.author }</small>
                    </Link>
                </div>
            ))}
        </div> 
     );
}
export default BlogList;