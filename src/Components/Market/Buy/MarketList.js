import MarketItem from "./MarketItem";

const MarketList = (passObj) => {
    
    // if(passObj){
    //     console.log(passObj);
    // }

    //Have to iterate through all Market items here
    return (
        <div>
            <h2>MarketList</h2>
            <MarketItem passObj={passObj.passObj}/>
        </div>
    );
};


export default MarketList;