import React, { useEffect, useState } from "react";
import { createUser } from "./AuthServices";
import RegForm from "./RegForm";

const Register = () => {

    const [newUser, setNewUser] = useState({
        fullName: "",
        email: "",
        password: "",
        passwordrepeated: ""
    });

    //const[categories, setCategories] = useState([]);
    let fileInput = React.createRef();

 
    // flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);

  useEffect(() => {
    if (newUser && add) {
      createUser(newUser, fileInput.current.files[0]).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("fullName")}, you successfully registered!`
          );
        }
        setAdd(false);
      });
    }
  }, [newUser, add, fileInput]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log("changed: ", e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewUser({
      ...newUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    window.localStorage.clear(); //Meant for testing - can be removed after development
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };

/*
  const onCheckHandler = (e) => {
      e.preventDefault();
      console.log('checked: ', e.target);
      setCategories(oldArray => [...oldArray, e.target.value]);
  }
*/


  return (
    <div>
      <RegForm
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
        fileInput={fileInput}
      />
    </div>
  );
};

export default Register;