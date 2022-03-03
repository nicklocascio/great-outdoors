import Market from "./Market/Market";
import NavBar from "./Navigation/NavBar";
import Home from "./Home/Home";
import Reviews from "./Reviews/Reviews";
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
                <Redirect to="/" />
            </Switch>
        </Router>

    );
};

export default Components;