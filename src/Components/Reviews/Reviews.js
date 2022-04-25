import ReviewList from "./ReviewList";
import PostReview from "./PostReview";
import {
  getAllReviews,
  createReview
} from "../../Services/Review.service"

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Parse from "parse";

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
        alert(`Posted!`)
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
      {Parse.User.current() ? (
        <PostReview 
          itemChange={itemChangeHandler}
          fileInput={fileInput}
          titleChange={titleChangeHandler}
          bodyChange={bodyChangeHandler}
          onClick={onClickHandler}
        />
      ) : (
        <div>
          <br />
          <h3>You must sign up or log in to post a review</h3>
          <br />
        </div>
      )}
      <hr />
      <br />
      <h1>Read Reviews</h1>
      {reviews.length > 0 && (
        <ReviewList reviews={reviews}/>
      )}
    </div>
  );
};

export default Reviews;