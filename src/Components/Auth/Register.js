import React, { useEffect, useState, useCallback } from "react";
import { createUser } from "./AuthServices";
import RegForm from "./RegForm";
import { Redirect } from "react-router-dom";

const Register = () => {

    //Need to actually compare passwordrepeated with password to guarantee equality
    const [newUser, setNewUser] = useState({
        fullName: "",
        email: "",
        password: "",
        passwordrepeated: ""
    });

    let fileInput = React.createRef();

    const [ski, setSki] = useState();
    const [sboard, setSboard] = useState();
    const [mbike, setMbike] = useState();
    const [rbike, setRbike] = useState(false);
    const [rock, setRock] = useState(false);
    const [hike, setHike] = useState(false);

    // flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);

  useEffect(() => {
    if (newUser && add) {
      createUser(newUser, fileInput.current.files[0], ski, sboard, mbike, rbike, rock, hike).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("fullName")}, you successfully registered!`
          );
          setAdd(false);
          window.location.href = "../Home/Home";
        }
        setAdd(false);
        <Redirect to="/" />;
      });
    }
  }, [newUser, add, fileInput, ski, sboard, mbike, rbike, rock, hike]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;

    setNewUser({
      ...newUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  const onClickHandler = (e) =>{ 
      var checked = e.target.checked;
      var value = e.target.value;
      if(value === "ski"){
        setSki(checked);
      } else if(value === "snowboard"){
        setSboard(checked);
      } else if(value === "bike_mountain"){
        setMbike(checked);
      } else if(value === "bike_road"){
        setRbike(checked);
      } else if(value === "rock_climb"){
        setRock(checked);
      } else if(value === "hike"){
        setHike(checked);
      }
  };

  return (
    <div>
      <RegForm
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
        onCheck={onClickHandler}
        fileInput={fileInput}
      />
    </div>
  );
};

export default Register;