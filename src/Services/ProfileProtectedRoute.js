import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

const ProfileProtectedRoute = ({ component: Component, flag, ...rest }) => {
    return (
        <div>
            {flag ? (
                <Redirect to={rest.path} />
            ) : (
                <div>
                    <br />
                    <br />
                    <p>Unauthorized! You must log in or sign up to view this page</p>
                    <br />
                    <Link to="/register"><button>Sign Up</button></Link>
                    <br />
                    <br />
                    <Link to="/login"><button>Login</button></Link>
                </div>
            )}
        </div>
    );
};

export default ProfileProtectedRoute;

/*

                */