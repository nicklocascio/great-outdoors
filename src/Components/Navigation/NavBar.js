import {Link} from "react-router-dom";
import '../../appStyles.css';

const NavBar = () => (
    <footer>
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
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    </footer>
);

export default NavBar;