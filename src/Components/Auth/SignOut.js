import Parse from "parse";
import {
    Redirect
  } from "react-router-dom";

const signOut = () => {
    console.log("Entering here");
    Parse.User.logOut()
    .then((loggedOut) => {
        return loggedOut;
    })
    .catch((error) => {
        alert(`Log In Error: ${error.message}`);
        return null;
    });
    return <Redirect to="/" />;
}

export default signOut;