import React from 'react';
import './ReviewCard.css';
const ReviewCard = (props) => {
    const {description,email,name,rating,userImage,_id}=props.review;
    return (

        <div className="row align-items-center review-card my-2 w-75">
        <div className="col-sm-6">
        <img style={{borderRadius:'50%'}} src={userImage} alt=""/>
        </div>
        <div className="col-sm-6">
        <h5 className="text-primary">Name: {name}</h5>
        <p className="text-secondary">Opinion: {description}</p>
        <p>Rating: {rating}/10</p>
        </div>
        </div>
    );
};

export default ReviewCard;