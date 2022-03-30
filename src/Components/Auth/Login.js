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
              alert(`You successfully logged in!`);
              setPass(false);
              window.location.href = "../Home/Home";
            }
            setPass(false);
          });
        }
    }, [logInUser, pass]);

    
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log("changed: ", e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setLogInUser({
      ...logInUser,
      [name]: newValue
    });
  };

    const onSubmitHandler = (e) => {
        console.log("submitted: ", e.target);
        e.preventDefault();
        setPass(true);
        console.log("CHANGED PASS: ", pass);
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

