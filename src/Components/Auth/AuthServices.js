import Parse from "parse";

export const createUser = (newUser, Image) => {
    const user = new Parse.User();

    user.set("username", newUser.email);
    user.set("fullName", newUser.fullName);
    user.set("password", newUser.password);
    user.set("email", newUser.email);
    if(Image) {
        const ImageFile = new Parse.File(Image.name, Image);
        user.set("profilePic", ImageFile);
    }
    // user.set("categories", categories);   

    return user
        .signUp()
        .then((newuserSaved) => {
         return newuserSaved;
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
    });
};

export const userLogIn = (logInUser) => {

    console.log("In userLogIn");
    const user = new Parse.User();
    user.set("username", logInUser.username);
    user.set("password", logInUser.password);

    return user.logIn()
    .then((loggedIn) => {
        return loggedIn;
    })
    .catch((error) => {
        alert(`Log In Error: ${error.message}`);
    });
};