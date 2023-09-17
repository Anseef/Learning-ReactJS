import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from '../useFetch';
const Home = () => {
    const [search,setSearch] = useState('');
    const [name,setName] = useState('');
    const { data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    //search blog
    const nameStore = (e) =>{
        setName(e.target.value);
    }
    const handleSearch = () =>{
        setSearch(name)
        var searchQuery = blogs.filter(blog => blog.author === name);
        if(searchQuery.length === 0 && name !== ''){
            document.querySelector('.results').innerHTML = 'No Result Found'
        }else{
            document.querySelector('.results').innerHTML = ''
        }  
    }
    return ( 
        <div className="homeContainer">
            <div className='searchBar'>
                <input type="text" onChange={ nameStore } placeholder="Search by Author"/>
                <button onClick={handleSearch}>Click Me</button>
            </div>
            {error && <h2 className='error'>{ error }</h2>}
            {isPending && <h3 className='loading'>Loading...</h3>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {blogs && search && <BlogList blogs={blogs.filter((blog) => blog.author === search)} title ={search+" Blogs"}/>}
            <p className='results'></p>
        </div>
    );
}
export default Home;