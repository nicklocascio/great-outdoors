import React from "react";
import "../Auth/AuthStyles.css";
import { Link } from "react-router-dom";

const EditProfileForm = ({ user, onChange, onSubmit, onCheck}) => {

    return(
        <div className="form">
            <form onSubmit={onSubmit} autoComplete="off">
                <br />
                <h1>Edit Profile</h1>
                <br />
                <p>Modify the information below to change your profile.</p>
                <br />
                <hr />
                <br />
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
                <label>{user.email}</label>

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

                <div className="checkboxes">
                    <b>I am a...</b>
                    <br />
                    <input className="checkboxes" type="checkbox" name="activities" value="ski" id="ski" onChange={onCheck} /><label>Skier</label>
                    <input type="checkbox" name="activities" value="sboard" id ="sboard" onChange={onCheck}/><label>Snowboarder</label>
                    <input type="checkbox" name="activities" value="bike_mountain" id ="bike_mountain" onChange={onCheck}/><label>Mountain Biker</label>
                    <input type="checkbox" name="activities" value="bike_road" id="bike_road" onChange={onCheck}/><label>Road Biker</label>
                    <input type="checkbox" name="activities" value="rock_climb" id="rock_climb" onChange={onCheck}/><label>Rock Climber</label>
                    <input type="checkbox" name="activities" value="hike" id="hike" onChange={onCheck}/><label>Hiker</label>
                </div>

                <br />
                <br />
                <button type="submit" onSubmit={onSubmit}>Submit Changes</button>
                <br />
                <div>
                        <br />
                        <p>
                            <Link to="/profile">Back to Profile</Link>
                        </p>
                </div>
            </form>
        </div>
    );
};

export default EditProfileForm;
