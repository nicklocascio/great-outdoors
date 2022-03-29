import {Link} from "react-router-dom";
import '../../appStyles.css';

const NavBar = () => (
    <nav>
        <ul className="navigation">

            <li>
                <Link to="/">Home</Link> 
            </li>
            <li>
                <Link to="/market">Market</Link>
            </li>
            <li>
                <Link to="/reviews">Reviews</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Sign Up</Link>
            </li>
        </ul>
    </nav>
)

export default NavBar;