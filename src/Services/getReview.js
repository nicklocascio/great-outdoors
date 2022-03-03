import Parse from "parse";

export const getReviewById = (id) => {
    const Reviews = Parse.Object.extend("Reviews");
    const query = new Parse.Query(Reviews);
    return query.get(id).then((result) => {
        console.log(result);
        return result;
    })
}