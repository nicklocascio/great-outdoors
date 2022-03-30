import React, { Component } from "react";
import { Redirect, useHistory } from "react-router-dom";

const ProfileProtectedRoute = ({ component: Component, flag, ...rest }) => {
    const history = useHistory();
    const goBackHandler = () => {
        history.goBack();
    };

    return (
        <div>
            {flag ? (
                <Redirect to={rest.path} />
            ) : (
                <div>
                    <p>Unauthorized! You must log in or sign up to view this page</p>
                    <button onClick={goBackHandler}>Go Back</button>
                </div>
            )}
        </div>
    );
};

export default ProfileProtectedRoute;