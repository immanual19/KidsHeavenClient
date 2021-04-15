import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import './Review.css';
const Review = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('https://tranquil-citadel-82136.herokuapp.com/getReview')
        .then(response=>response.json())
        .then(data=>setReviews(data))
    },[reviews])
    return (
        <div className="my-5">
        <h1>Testimonials</h1>
        <section className="review-card-container">
            {
                reviews.map(review=><ReviewCard review={review}></ReviewCard>)
            }
        </section>
        </div>
    );
};

export default Review;