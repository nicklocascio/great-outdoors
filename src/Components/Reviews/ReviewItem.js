const ReviewItem = (review) => {
  review = review.review;
  //Insert reviews here
  return(
    <div>
      <h3>
        {review.get("title")}
      </h3>
      <img
        alt="not available" 
        src={review.get("image") !== undefined ? review.get("image").url() : "false"} style={{"height":"30%", "width": "30%"}} 
      />
      <p>
        {review.get("body")}
      </p>
    </div>
  );
}

export default ReviewItem;