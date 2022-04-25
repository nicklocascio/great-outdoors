import React, { useEffect, useState } from "react";
import { userLogIn } from "./AuthServices";
import LoginForm from "./LoginForm";


const Login = () => {
    
    const [logInUser, setLogInUser] = useState({
        username: "",
        password: "",
    });
    const[pass, setPass] = useState(false);

    useEffect(() => {
        if (logInUser && pass) {
          userLogIn(logInUser).then((loggedIn) => {
            if (loggedIn) {
              setPass(false);
              window.location.href = "../Home/Home";
            }
            setPass(false);
          });
        }
    }, [logInUser, pass]);

    
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;

    setLogInUser({
      ...logInUser,
      [name]: newValue
    });
  };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setPass(true);
    };

    return(
        <LoginForm 
            user={logInUser}
            onChange={onChangeHandler}
            onSubmit={onSubmitHandler}
        />
    );
};

export default Login;

