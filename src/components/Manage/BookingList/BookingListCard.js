import { Button } from '@material-ui/core';
import React from 'react';

const BookingListCard = ({booking}) => {

    const {userName,serviceName,servicePrice,serviceStatus,date}=booking;
    console.log(userName,serviceName,servicePrice,serviceStatus,date);
    return (
        <section class="card text-center" style={{width: '18rem'}}>
        <div class="card-body">
        <h4 class="card-title">{serviceName}</h4>
        <p class="card-text">Ordered By: {userName}</p>
        <p class="card-text">Price: {servicePrice}</p>
        <p class="card-text">Date ordered: {date}</p>
        <Button variant="contained" color="primary">{serviceStatus}</Button>
        </div>
        </section>
    );
};

export default BookingListCard;