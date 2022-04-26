import React, { useEffect, useState } from "react";
import Parse from "parse";
import { sentEmail } from "../../Services/Profile.service";

const PasswordReset = () => {

    const[pass, setPass] = useState(false);
    //const[email, setEmail] = useState("");
    const [email, setEmail] = useState({
        email: "" 
    });
    var displayFlag = {display:'none'};

    useEffect(() => {
        if (pass && email) {
            console.log("Email:" + email.email);
            sentEmail(email.email).then((emailSent) => {
                if(emailSent){
                    alert(`An email was sent to ${email.email}` )
                    setPass(false);
                }
            });
        }
        setPass(false);
    }, [pass, email]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        console.log("changed: ", e.target);
        const { name, value: newValue } = e.target;
        console.log(newValue);

        setEmail({
            ...email,
          [name]: newValue
        });
      };

    const onSubmitHandler = (e) => {
        //console.log("submitted: ", e.target);
        e.preventDefault();
        setPass(true);
        displayFlag = {display:''};
        //alert("Thanks! We sent an email.");
    };

    return(
        <div className="form">
            <form onSubmit={onSubmitHandler} autoComplete="off">
                <br />
                <h1>Password Reset</h1>
                <br />
                <h3>Forgot your password? We've got you covered.</h3>
                <br />
                <hr />
                <br />
                <p>Please enter your account's email in the space provided.</p>
                <br />
                <p>We'll send you a link to reset your password.</p>
                <br />
                <input name="email" id="email" placeholder="Email" onChange={onChangeHandler} value={email.email} required/>
                <br />
                <br />
                <button type="submit" onSubmit={onSubmitHandler}>Submit</button>
                <br />
                <br />
                <p  style={displayFlag}>Thanks! We've sent an email to your account.</p>
            </form>
        </div>
    );

};

export default PasswordReset;