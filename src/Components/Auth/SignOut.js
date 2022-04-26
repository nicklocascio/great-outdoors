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
    window.location.href = "../Home/Home";
    return null;
}

export default signOut;