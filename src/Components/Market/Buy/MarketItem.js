import "../marketStyles.css";
import bike from "../../../Images/bike.jpeg";


//Need to change image source here
const MarketItem = (passObj) => {

    //If item has been loaded, return text for it
    //Add distance attribute to Market item in Back4App?
    //Add image to back4App?
        //I've added the full image path here just for show
    //May have to add image upload capability to sale as well
    if(passObj.passObj){
        console.log(passObj);
        return (
            <div className="listing-card">
            <div className="listing-card-inside">
              <div className="listing-card-front">
                <img
                  src={bike} style={ {"width": "300px", "height": "300px"}}
                />
              </div>
              <div class="listing-card-back">
                <h3>
                  {passObj.passObj.name}
                </h3>
                <ul>
                  <li>Size: {passObj.passObj.size}</li>
                  <li>Gender: {passObj.passObj.gender}</li>
                  <li>Level: {passObj.passObj.level}</li>
                  <li>Distance from you: 10 mi</li>
                </ul>
              </div>
            </div>
          </div>
        );
    } else{
        return null;
    }
};


export default MarketItem;