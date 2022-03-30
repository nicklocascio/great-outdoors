import {Link} from "react-router-dom";
import Parse from "parse";
import '../../appStyles.css';
import SignOut from "../Auth/SignOut";

const NavBar = () => {

    var logInStatus = Parse.User.current();
    var authDisplayStatus = {};
    var signoutDisplayStatus = {};
    if(logInStatus){
        authDisplayStatus = {display: 'none'};
        signoutDisplayStatus = {display: ''};
    } else{
        authDisplayStatus = {display: ''};
        signoutDisplayStatus = {display: 'none'};
    }
    console.log(logInStatus);
    console.log(authDisplayStatus);
    console.log(signoutDisplayStatus);
    return(
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
                    <Link to="/signout">Sign Out</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;