import logo from '../logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <Link to="/Portfolio">
            <img src={logo} alt="logo" />
            </Link>
            <div className="links">
                <Link to="/about">About</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/work">Work</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;