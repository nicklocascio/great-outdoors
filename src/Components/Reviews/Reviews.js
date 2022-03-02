import {Link} from "react-router-dom";
import ReviewList from "./ReviewList";

//Need to change link path once we add profile page
//Add code to iterate through all reviews
export default function Reviews(){
    return(
    <div>
    <h1>Reviews</h1>
      <p>
        Based on what you specified when you signed up for an account, reviews
        for the following types of gear will be displayed:
      </p>
      <ul>
        <li>Snowboarding</li>
        <li>Mountain Biking</li>
        <li>Rock Climbing</li>
      </ul>
      <p>
        Does something look wrong here? Make a change on your
        <Link to="/">profile</Link> page.
      </p>
      <hr />
      <ReviewList />
    </div>
    );
}