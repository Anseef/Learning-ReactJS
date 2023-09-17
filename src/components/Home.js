import { useState,useEffect} from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs,setBlogs] =useState([
        {title:'My First Blog',body:'Hello Guys...',author:'Luke',id:1},
        {title:'Jakes Journey Begins',body:'Hello Its Me Jake...',author:'Jake',id:2},
        {title:'Tales of Anton',body:'Welcome to my world of Blogs...',author:'Antony',id:3}
    ])

    const [name,setName] = useState('');
    const nameStore = (e) =>{
        setName(e.target.value)
    }

    const [search,setSearch] = useState('');
    const handleSearch = () =>{
        setSearch(name)
        var searchQuery = blogs.filter(blog => blog.author == name);
        if(searchQuery.length === 0){
            document.querySelector('.results').innerHTML = 'No Result Found'
        }else{
            document.querySelector('.results').innerHTML = ''
        }  
    }
    
    const handleDelete = (id) => {
        var newBlog = blogs.filter(b => b.id !== id);
        setBlogs(newBlog)
    }
    useEffect(() =>{
        console.log("Hello")
    },[blogs])
    return ( 
        <div className="homeContainer">
            <div className='searchBar'>
                <input type="text" onChange={ nameStore } placeholder="Search by Author"/>
                <button onClick={handleSearch}>Click Me</button>
            </div>
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            {search && <BlogList blogs={blogs.filter((blog) => blog.author == search)} title ={search+" Blogs"}/>}
            <p className='results'></p>
        </div>
    );
}
export default Home;