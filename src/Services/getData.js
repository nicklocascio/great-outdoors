import Parse from "parse";

export const getById = (id) => {
    const Market = Parse.Object.extend("Market");
    const query = new Parse.Query(Market);
    return query.get(id).then((result) => {
        return result;
    });
};