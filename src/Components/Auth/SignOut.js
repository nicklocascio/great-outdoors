import Parse from "parse";

const signOut = () => {
    
    Parse.User.logOut()
    .then((loggedOut) => {
        return loggedOut;
    })
    .catch((error) => {
        alert(`Log In Error: ${error.message}`);
        return null;
    });
    return window.location.href = "../Home/Home";
}

export default signOut;