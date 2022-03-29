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
                <Redirect to="/register" />
            )}
        </div>
    );
};

export default ProfileProtectedRoute;