import "../../appStyles.css";
import React, { useState, useEffect } from "react";
import ProfileProtectedRoute from "../../Services/ProfileProtectedRoute";
import LiveChat from "./LiveChat";
import Parse from "parse";

const Messages = () => {
    const [flag, setFlag] = useState(false);
    const [path, setPath] = useState("");

    useEffect(() => {
        if(Parse.User.current() && Parse.User.current().authenticated()) {
            setPath(
                "/user/" + 
                Parse.User.current().get("fullName").split(" ")[0] + "/" +
                Parse.User.current().get("fullName").split(" ")[1] 
                + "/messages"
            );
            console.log(path);
            setFlag(true);
        } else {
            setFlag(false);
        }
    }, [flag, path]);
    
    return (
        <div>
            <ProfileProtectedRoute exact path={path} flag={flag} component={LiveChat} />
        </div>
    );
};

export default Messages;