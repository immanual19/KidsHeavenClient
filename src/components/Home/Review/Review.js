import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import './Review.css';
const Review = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('https://tranquil-citadel-82136.herokuapp.com/getReview')
        .then(response=>response.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className="my-5">
        <h1>Testimonials</h1>
        <p>Let's see what our honourable customers say about us.</p>
        <section className="review-card-container">
            {
                reviews.map(review=><ReviewCard key={review._id} review={review}></ReviewCard>)
            }
        </section>
        </div>
    );
};

export default Review;