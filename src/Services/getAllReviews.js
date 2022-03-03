import Parse from "parse";

export const getAllReviews = () => {
    const Reviews = Parse.Object.extend("Reviews");
    const query = new Parse.Query(Reviews);
    return query.find().then((results) => {
        console.log(results);
        return results;
    })
}