import MarketItem from "./MarketItem";

const MarketList = (passObj) => {
    
    // if(passObj){
    //     console.log(passObj);
    // }

    //Not sure why you need to pass "passObj.passObj"?
    //Does it package another layer in every child?
    return (
        <div>
            <h2>MarketList</h2>
            <MarketItem passObj={passObj.passObj}/>
        </div>
    );
};


export default MarketList;