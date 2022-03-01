const MarketItem = (passObj) => {

    //If item has been loaded, return text for it
    if(passObj){
        console.log(passObj);
        return (
            <div>
                <h3>Market Item</h3>
                <h4>{passObj.passObj.name}</h4>
                <ul>
                    <li>{passObj.passObj.size}</li>
                    <li>{passObj.passObj.gender}</li>
                    <li>{passObj.passObj.level}</li>
                </ul>
            </div>
        );
    } else{
        return null;
    }

};


export default MarketItem;