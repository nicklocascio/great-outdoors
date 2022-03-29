import React from "react";
import { Link, useParams } from "react-router-dom";

const ProfileGood = () => {
    const { firstName, lastName } = useParams();

    return (
        <div>
            <h1>
                {" "}
                User" {firstName} {lastName}{" "}
            </h1>
        </div>
    );
};

export default ProfileGood;