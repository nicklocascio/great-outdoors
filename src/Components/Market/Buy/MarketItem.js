import "../marketStyles.css";

//Need to change image source here
const MarketItem = (item) => {
  item = item.item;
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
          <h3>
            {item.get("item")}
          </h3>
          <ul>
            <li>Size: {item.get("size")}</li>
            <li>Gender: {item.get("gender")}</li>
            <li>Level: {item.get("level")}</li>
            <li>Distance from you: 10 mi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default MarketItem;