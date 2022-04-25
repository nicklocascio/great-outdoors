import Market from "./Market/Market";
import NavBar from "./Navigation/NavBar";
import Home from "./Home/Home";
import Reviews from "./Reviews/Reviews";
import Profile from "./Profile/Profile";
import ProfileGood from "./Profile/ProfileGood";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import SignOut from "./Auth/SignOut";
import EditProfile from "./Profile/EditProfile";
import EditProfileGood from "./Profile/EditProfileGood";
import PasswordReset from "./Auth/PasswordReset";
import Messages from "./Messages/Messages";
import LiveChat from "./Messages/LiveChat";

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
                <Route path="/user/:firstName/:lastName" exact component={ProfileGood} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/signout" component={SignOut} />
                <Route path="/editprofile" component={EditProfile} />
                <Route path="/user/:firstName/:lastName/editprofile" component={EditProfileGood} />
                <Route path="/passwordreset" component={PasswordReset} />
                <Route path="/messages" component={Messages} />
                <Route path="/user/:firstName/:lastName/messages" component={LiveChat} />
                <Redirect to="/" />
            </Switch>
        </Router>

    );
};

export default Components;