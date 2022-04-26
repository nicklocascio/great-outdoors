import {Link} from "react-router-dom";
import Parse from "parse";
import '../../appStyles.css';

const NavBar = () => {
    var authDisplayStatus = {};
    var signoutDisplayStatus = {};
    if(Parse.User.current() && Parse.User.current().authenticated()){
        authDisplayStatus = {display: 'none'};
        signoutDisplayStatus = {display: ''};
    } else{
        authDisplayStatus = {display: ''};
        signoutDisplayStatus = {display: 'none'};
    }

    /*
    console.log(logInStatus);
    console.log(authDisplayStatus);
    console.log(signoutDisplayStatus);
    */
   
    return(
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
                    <li style={authDisplayStatus}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li style={authDisplayStatus}>
                        <Link to="/register">Sign Up</Link>
                    </li>
                    <li style={signoutDisplayStatus}>
                        <Link to="/messages">Messages</Link>
                    </li>
                    <li style={signoutDisplayStatus}>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li style={signoutDisplayStatus}>
                        <Link to="/signout">Sign Out</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default NavBar;