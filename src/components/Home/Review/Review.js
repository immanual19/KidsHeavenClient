import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import './Review.css';
const Review = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8080/getReview')
        .then(response=>response.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className="my-5">
        <h1>Testimonials</h1>
        <section className="review-card-container">
            {
                reviews.map(review=><ReviewCard key={review._id} review={review}></ReviewCard>)
            }
        </section>
        </div>
    );
};

export default Review;