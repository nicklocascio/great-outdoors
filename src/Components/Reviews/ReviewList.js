// file just to iterate over reviews to return them
import ReviewItem from "./ReviewItem";

const ReviewList = (reviews) => {
    return (
        <div>
            {reviews.reviews.map((review) => (
                <ReviewItem key={review["id"]} review={review} />
            ))}
        </div>
    );
};

export default ReviewList;