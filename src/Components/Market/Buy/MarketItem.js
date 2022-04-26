import "../marketStyles.css";
import {getItemEmail} from "../../../Services/Market.service";
import {useEffect, useState} from "react";

//Need to change image source here
const MarketItem = (item) => {
  item = item.item;
  const[email, setEmail] = useState();

  useEffect(() => {
    if(item) {
        getItemEmail(item.get("user").id).then((emailStr) => {
            setEmail(emailStr);
        })
    } else {
      console.log("Failure")
    }
  }, [item]);
  //If item has been loaded, return text for it
  //Add distance attribute to Market item in Back4App?
  //Add image to back4App?
  //I've added the full image path here just for show
  //May have to add image upload capability to sale as well
  return (
      <div className="listing-card">
      <div className="listing-card-inside">
        <div className="listing-card-front">
          <img
            alt="not available"
            src={item.get("image") !== undefined ? item.get("image").url() : "false"} style={ {"width": "99%", "height": "99%", "padding": "1px"}}
          />
        </div>
        <div className="listing-card-back">
          <br />
          <h3>
            {item.get("item")}
          </h3>
          <ul>
            <li>Model: {item.get("model")}</li>
            <li>Size: {item.get("size")}</li>
            <li>Gender: {item.get("gender")}</li>
            <li>Level: {item.get("level")}</li>
            <br />
            <li>Posted By: {email}</li>
            <li style={{'display':'none'}}>Id: {item.get("user").id}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default MarketItem;