import Market from "./Market/Market";
import NavBar from "./Navigation/NavBar";
import Home from "./Home/Home";
import Reviews from "./Reviews/Reviews";
import Profile from "./Profile/Profile";
import ProfileGood from "./Profile/ProfileGood";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import SignOut from "./Auth/SignOut"

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

const Components = () => {
    return(
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/market" component={Market} />
                <Route path="/reviews" component={Reviews} />
                <Route path="/profile" component={Profile} />
                <Route path="/user/:firstName/:lastName" component={ProfileGood} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/signout" component={SignOut} />
                <Redirect to="/" />
            </Switch>
        </Router>

    );
};

export default Components;