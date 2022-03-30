import React from "react";
import "./AuthStyles.css";
import { Link } from "react-router-dom";

const RegForm = ({ user, onChange, onSubmit, onCheck, fileInput}) => {
  return (
    <div className="form">
      <form onSubmit={onSubmit} autoComplete="off">
        <div>
        <h1>Register</h1>
          <p>Please fill out this form to create an account.</p>
          <hr />
          <label><b>Name</b></label>
          <br />
          <input
            type="text"
            id="full-name-input"
            value={user.fullName}
            onChange={onChange}
            name="fullName"
            placeholder="Enter first and last name"
            required
          />
          <br />
          <br />

          <label><b>Email</b></label>
          <br />
          <input
            type="email"
            id="first-name-input"
            value={user.email}
            onChange={onChange}
            name="email"
            placeholder="Email"
            required
          />
          
          <br />
          <br />
          
          <label><b>Password</b></label>
          <br />
          <input
            type="password"
            id="password-input"
            value={user.password}
            onChange={onChange}
            name="password"
            placeholder="Password"
            required
          />

          <br />
          <br />
        
          <label><b>Repeat Password</b></label>
          <br />
          <input
            type="password"
            id="password-repeated-input"
            value={user.passwordrepeated}
            onChange={onChange}
            name="passwordrepeated"
            placeholder="Repeat password"
            required
          />
          <br />
          <br />

          <label htmlFor="photos">
            <b>Please upload a profile photo:</b><br />
          </label>
          <input type="file" name="profilePic" ref={fileInput} />
          
          <br />

          <p>
            <b>I am a...</b>
            <br />
            <input type="checkbox" name="activities" value="ski" id="ski" onChange={onCheck} />Skier
            <input type="checkbox" name="activities" value="snowboard" id = "snowboard" onChange={onCheck}/>Snowboarder
            <input type="checkbox" name="activities" value="bike_mountain" id = "bike_mountain" onChange={onCheck}/>Mountain Biker
            <input type="checkbox" name="activities" value="bike_road" id="bike_road" onChange={onCheck}/>Road Biker
            <input type="checkbox" name="activities" value="rock_climb" id="rock_climb" onChange={onCheck}/>Rock Climber
            <input type="checkbox" name="activities" value="hike" id="hike" onChange={onCheck}/>Hiker
          </p>

          <br />

          <button type="submit" onSubmit={onSubmit}>Submit
          </button>
          <br />
          <div>
                <br />
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
                </div>
        </div>
      </form>
    </div>
  );
};

export default RegForm;
