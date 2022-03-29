import React from "react";
import { Link, useParams } from "react-router-dom";
import Parse from "parse";

const ProfileGood = () => {
    const { firstName, lastName } = useParams();

    const user = Parse.User.current();

    return (
        <div>
            <h1>
                Profile
            </h1>
            
            <img 
                src={user.get("profilePic").url()} 
                style={{"height": "50%", "width": "50%"}}
            />

            <h4>
                Name: {firstName} {lastName}
                <br />
                Email: {user.get("email")}
            </h4>
        </div>
    );
};

export default ProfileGood;