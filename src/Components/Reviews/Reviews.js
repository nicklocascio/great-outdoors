import {Link} from "react-router-dom";
import ReviewList from "./ReviewList";
import PostReview from "./PostReview";

//Need to change link path once we add profile page
//Add code to iterate through all reviews
export default function Reviews(){
    return(
    <div>
      <PostReview />
      <p>
        <h1>Read Reviews</h1>
        Based on what you specified when you signed up for an account, reviews
        for the following types of gear will be displayed:
      </p>
      <ul>
        <li>Snowboarding</li>
        <li>Mountain Biking</li>
        <li>Rock Climbing</li>
      </ul>
      <p>
        Does something look wrong here? Make a change on your <Link to="/">profile</Link> page.
      </p>
      <ReviewList />
    </div>
    );
}