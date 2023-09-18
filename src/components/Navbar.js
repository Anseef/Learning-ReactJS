const Navbar = () =>{
    const popUp = (e) => {
        e.preventDefault();
        document.querySelector('.Container').classList.add('blur');
        document.querySelector('.create-container').classList.add('active');
    }
    return(
        <nav className="navbar">
            <h1 className="logo">DoneIT</h1>
            <div className="navList">
                <a href="/">Home</a>
                <a href="/" className="active" onClick={ popUp }>Create Blog</a>
            </div>
        </nav>
    );
}
export default Navbar;