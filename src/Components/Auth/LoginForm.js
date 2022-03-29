import React from "react";
import "./AuthStyles.css";
import { Link } from "react-router-dom";

const LoginForm = ({ user, onChange, onSubmit }) => {
    return(
        <div className="form">
            <form onSubmit={onSubmit} autoComplete="off">
                <div>
                <h1>Login</h1>
                <p>Please sign in below.</p>
                <hr />
                <br />
                <label htmlFor="email"><b>Email</b></label>
                <br />
                <input
                    type="text"
                    placeholder="Enter Email"
                    name="username"
                    id="username"
                    value={user.username}
                    onChange={onChange}
                    required
                />

                <br />
                <br />

                <label htmlFor="password"><b>Password</b></label>
                <br />
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={onChange}
                    required
                />

                <br />
                <br />

                <button type="submit" onSubmit={onSubmit}>Login</button>
                </div>
    
                <div>
                <br />
                <p>
                    Don't have an account? <Link to="/register">Create One</Link>
                </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;