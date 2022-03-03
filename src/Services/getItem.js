import Parse from "parse";

export const getItemById = (id) => {
    const Market = Parse.Object.extend("Market");
    const query = new Parse.Query(Market);
    return query.get(id).then((result) => {
        console.log(result);
        return result;
    });
};