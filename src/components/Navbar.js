const Navbar = () =>{
    return(
        <nav className="navbar">
            <h1 className="logo">DoneIT</h1>
            <div className="navList">
                <a href="/">Home</a>
                <a href="/" className="active">Create Blog</a>
            </div>
        </nav>
    );
}
export default Navbar;