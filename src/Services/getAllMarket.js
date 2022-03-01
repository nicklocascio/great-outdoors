import Parse from "parse";

export const getAllMarket = (id) => {
    const Market = Parse.Object.extend("Market");
    const query = new Parse.Query(Market);
    return query.find().then((results) => {
        return results;
    });
};