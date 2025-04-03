import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return(
        <nav>
            <NavLink to="/" className="nav-link">
                Home
            </NavLink>

            <NavLink to="/champions" className="nav-link">
                Champions
            </NavLink>

            <NavLink to="/rankings" className="nav-link">
                Rankings
            </NavLink>
        </nav> 
    )
}

export default NavBar;