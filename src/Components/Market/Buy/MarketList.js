import MarketItem from "./MarketItem";

const MarketList = (marketItems) => {
    //Have to iterate through all Market items here
    return (
        <div>
            <h2>Items For Sale</h2>
            {marketItems.marketItems.map((item) => (
                <MarketItem key={item["id"]} item={item} />
            ))}
        </div>
    );
};

export default MarketList;