import React, { useState, useEffect } from "react";
import ProfileProtectedRoute from "../../Services/ProfileProtectedRoute";
import ProfileGood from "./ProfileGood";
import Parse from "parse";

const Profile = () => {
    const [flag, setFlag] = useState(false);
    const [path, setPath] = useState("");

    useEffect(() => {
        if(Parse.User.current()) {
            setPath(
                "/user/" + 
                Parse.User.current().get("firstName") + "/" +
                Parse.User.current().get("lastName")
            );
            setFlag(true);
        } else {
            setFlag(false);
        }
    }, [flag, path]);
    
    return (
        <div>
            <ProfileProtectedRoute exact path={path} flag={flag} component={ProfileGood} />
        </div>
    );
};

export default Profile;