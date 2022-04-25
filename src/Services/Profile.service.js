import Parse from "parse";

export const updateUser = (usr, ski, sboard, mbike, rbike, rock, hike) => {
    
    var categories = [];

    if(usr.password !== usr.passwordrepeated){
        alert(`Passwords don't match!`);
        window.location.href = "./editprofile";
    }
   
    if({ski}.ski === true){
        categories.push("ski");
    }
    if({sboard}.sboard === true){
        categories.push("sboard");
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

    return Parse.Cloud.run("editProfile", {
    "objectId": usr.objectId,
    "newFullName":usr.fullName,
    "newPassword":usr.password, 
    "newCategories":categories})
    .then((updateSaved) => {
            return updateSaved;
        })
        .catch((error) => {
            alert( `Error: ${error.message}`);
            return null;
        });

        
};

export const sentEmail = (email) => {
    return(Parse.User.requestPasswordReset(email));
}

//Something in this function (or the way I call it) is buggy but idk what
//It usually works fine the first few times but eventually fails to log back in
export const refreshUser = (usr) => {

    let user = new Parse.User();
    user.set("username", String(usr.email));
    user.set("password", String(usr.password));

    Parse.User.logOut().then((loggedOut) => {
        user.logIn().then((loggedIn) => {
            alert(`Updated profile!`)
            window.location.href = "/profile";
            return loggedIn;
        })
        .catch((error) => {
            alert(`${error.message}`);
            return null;
        });

        return loggedOut;
    });
}