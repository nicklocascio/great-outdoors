import Parse from "parse"

// get all Reviews
export const getAllReviews = () => {
    const Reviews = Parse.Object.extend("Review");
    const query = new Parse.Query(Reviews);
    return query.find().then((results) => {
        console.log(results);
        return results;
    })
}

// get specific Review
export const getReviewById = (id) => {
    const Reviews = Parse.Object.extend("Review");
    const query = new Parse.Query(Reviews);
    return query.get(id).then((result) => {
        console.log(result);
        return result;
    })
}

// create new Review
export const createReview = (Item, Image, Title, Body) => {
    const Review = Parse.Object.extend("Review");
    const review = new Review();
    if(Image) {
        const imageFile = new Parse.File(Image.name, Image);
        review.set("image", imageFile);
    }
    review.set("category", Item)
    review.set("title", Title);
    review.set("body", Body)
    return review.save().then((result) => {
        return result;
    });
};

// delete Review - might require authentication
export const removeReview = (id) => {
    const Lesson = Parse.Object.extend("Review");
    const query = new Parse.Query(Lesson);
    return query.get(id).then((result) => {
      return result.destroy();
    });
  };