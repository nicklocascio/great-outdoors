import React, {useState, useEffect} from "react";
import { Redirect, useParams } from "react-router-dom";
import {Parse} from "parse";
import EditProfileForm from "./EditProfileForm";
import { updateUser, refreshUser } from "../../Services/Profile.service";
import { Session } from "parse/lib/browser/Parse";

const EditProfileGood = () => {
    const { firstName, lastName } = useParams();

    let usr = null;

    if(Parse.User.current()){
        usr = Parse.User.current();
    }

    const [user, setUser] = useState({
        objectId: usr.id,
        fullName: usr.get("fullName"),
        email: usr.get("email"),
        password: "",
        passwordrepeated: ""
    });

    const [ski, setSki] = useState();
    const [sboard, setSboard] = useState();
    const [mbike, setMbike] = useState();
    const [rbike, setRbike] = useState();
    const [rock, setRock] = useState();
    const [hike, setHike] = useState();

    // flags in the state to watch for form submission
    const [add, setAdd] = useState(false);

    //Calls necessary functions
    useEffect(() => {
        if (user && add) {
          updateUser(user, ski, sboard, mbike, rbike, rock, hike).then((userUpdated) => {
            if (userUpdated) {
              setAdd(false);
              refreshUser(user).then((loggedBack) => {
                  alert(`Profile updated!`);
                  window.location.href = "/profile";
              });
            }
            setAdd(false);
          });
        }
      }, [user, add, ski, sboard, mbike, rbike, rock, hike]);

  //Handles text input
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;

    setUser({
      ...user,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  //Handles checkboxes
  const onClickHandler = (e) =>{ 
      var checked = e.target.checked;
      var value = e.target.value;
      if(value === "ski"){
        setSki(checked);
      } else if(value === "sboard"){
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
      <EditProfileForm
        user={user}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
        onCheck={onClickHandler}
      />
    </div>
  );
};

export default EditProfileGood;