import { useParams } from "react-router-dom";
import useFetch from "../useFetch"
const BlogDetails = () => {
    const { id } = useParams();
    const { data:blog, error, isPending } = useFetch('http://localhost:8000/blogs/'+id);
    return ( 
        <div className="blog-details">
            {error && <h2 className='error'>{ error }</h2>}
            {isPending && <h3 className='loading'>Loading...</h3>}
            {blog && (
            <article className="blog-preview">
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <div className="blog-content">{ blog.body }</div>
            </article>)}
        </div>
     );
}
export default BlogDetails;