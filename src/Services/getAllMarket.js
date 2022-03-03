import Parse from "parse";

export const getAllMarket = () => {
    const Market = Parse.Object.extend("Market");
    const query = new Parse.Query(Market);
    return query.find().then((results) => {
        console.log(results);
        return results;
    });
};