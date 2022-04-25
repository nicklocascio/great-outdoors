import {useState, useEffect, React} from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import Parse from "parse";
import { set } from "parse/lib/browser/CoreManager";

const ProfileGood = () => {
    const { firstName, lastName } = useParams();
    var skiFlag = {display: 'none'};
    var sboardFlag = {display: 'none'};
    var mbikeFlag = {display: 'none'};
    var rbikeFlag = {display: 'none'};
    var rClimbFlag = {display: 'none'};
    var hikeFlag = {display: 'none'};
    
    let user = null;
    let categories = [];
    let preferences = [];
    if(Parse.User.current() ) {
        user = Parse.User.current();
        let categories = user.get("categories");

        for(const pref in categories){
            if(categories[pref] === "ski"){
                skiFlag = {display: ''};
            } else if(categories[pref] === "sboard"){
                sboardFlag = {display: ''};
            } else if(categories[pref] === "bike_mountain"){
                mbikeFlag = {display: ''};
            } else if(categories[pref] === "bike_road"){
                rbikeFlag = {display: ''};
            } else if(categories[pref] === "rock_climb"){
                rClimbFlag = {display: ''};
            } else if(categories[pref] === "hike"){
                hikeFlag = {display: ''};
            }
        }
    } else {
        return (
            <Redirect to="/register" />
        )
    }
    return (
        <div>
            <br />
            <h1>
                Profile
            </h1>
            <br />
            
            <img 
                src={user.get("profilePic").url()} 
                style={{"height": "40%", "width": "40%"}}
            />
            <br />
            <br />
            <h4 style={{"color" : "rgb(21, 160, 21", "display" : "inline"}}>Name: </h4 >
            <h4 style={{"display":"inline"}}>{firstName} {lastName}</h4>
            <br />
            <br />
            <h4 style={{"color" : "rgb(21, 160, 21", "display" : "inline"}}>Email: </h4>
            <h4 style={{"display":"inline"}}>{user.get("email")}</h4>
            <br />
            <br />
            <h4 style={{"color" : "rgb(21, 160, 21", "display" : "inline"}}>Activity Preferences:</h4>
            <h4>
                <li style={skiFlag}>Skiing</li>
                <li style={sboardFlag}>Snowboarding</li>
                <li style={mbikeFlag}>Mountain Biking</li>
                <li style={rbikeFlag}>Road Biking</li>
                <li style={rClimbFlag}>Rock Climbing</li>
                <li style={hikeFlag}>Hiking</li>
                
            </h4>
            <br />
            
            <h4>
                Need to make profile changes?
            </h4>
            <br />
            <Link to="/editprofile">
            <button>Edit Profile</button>
            </Link>
            <br />
            <br />
            <br />
        </div>
    );
};

export default ProfileGood;