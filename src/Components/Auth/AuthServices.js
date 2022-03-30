import Parse from "parse";

export const createUser = (newUser, Image, ski, sboard, mbike, rbike, rock, hike) => {

    const user = new Parse.User();
    var categories = [];

    user.set("username", newUser.email);
    user.set("fullName", newUser.fullName);
    user.set("password", newUser.password);
    user.set("email", newUser.email);
    if(Image) {
        const ImageFile = new Parse.File(Image.name, Image);
        user.set("profilePic", ImageFile);
    }
    console.log({ski});
    console.log({sboard});
    console.log({mbike});

    if({ski}.ski === true){
        categories.push("ski");
    }
    if({sboard}.sboard === true){
        categories.push("snowboard");
    }
    if({mbike}.mbike === true){
        categories.push("bike_mountain");
    }
    if({rbike}.rbike === true){
        categories.push("bike_road");
    }
    if({rock}.rock === true){
        categories.push("rock_climb");
    }
    if({hike}.hike === true){
        categories.push("hike");
    }

    user.set("categories", categories);   

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