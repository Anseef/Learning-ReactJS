import { Link } from "react-router-dom";
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
                <Link to="/">Home</Link>
                <Link className="active" onClick={ popUp }>Create Blog</Link>
            </div>
        </nav>
    );
}
export default Navbar;