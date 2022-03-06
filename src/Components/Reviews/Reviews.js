import ReviewList from "./ReviewList";
import PostReview from "./PostReview";
import {
  getAllReviews,
  createReview
} from "../../Services/Review.service"

import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

//Need to change link path once we add profile page
const Reviews = () => {
  // variables in state to hold data
  const [reviews, setReviews] = useState([]);

  // load data asynchronously
  useEffect(() => {
    getAllReviews().then((data) => {
      setReviews(data);
    })
  }, []);

  // state variables for form input and flag for submission
  const [add, setAdd] = useState(false);
  const [item, setItem] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  // this allows us to take the file and upload it to database
  let fileInput = React.createRef();

  useEffect(() => {
    if(add && item && title && body) {
      createReview(item, fileInput.current.files[0], title, body).then((newReview) => {
        setAdd(false);
        setReviews([...reviews, newReview]);
      })
    } else {
      setAdd(false);
    }
  }, [add, item, fileInput, title, body, reviews]);

  // handlers for form changes and submission
  const itemChangeHandler = (e) => {
    setItem(e.target.value);
  }

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  }

  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  }

  const onClickHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  }

  return(
    <div>
      <PostReview 
        itemChange={itemChangeHandler}
        fileInput={fileInput}
        titleChange={titleChangeHandler}
        bodyChange={bodyChangeHandler}
        onClick={onClickHandler}
      />
      <h1>Read Reviews</h1>
      <p>
        Based on what you specified when you signed up for an account, reviews for the following types of gear will be displayed:
      </p>
      <ul>
        <li>Snowboarding</li>
        <li>Mountain Biking</li>
        <li>Rock Climbing</li>
      </ul>
      <p>
        Does something look wrong here? Make a change on your <Link to="/">profile</Link> page.
      </p>
      {reviews.length > 0 && (
        <ReviewList reviews={reviews}/>
      )}
    </div>
  );
};

export default Reviews;