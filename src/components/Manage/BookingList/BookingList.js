import React from 'react';
import BookingListCard from './BookingListCard';
import './BokingList.css';
const BookingList = ({myBookings}) => {
    console.log("From BookingList: ",myBookings);
    return (
        <div className="my-booking-list-cotainer">
            {
                myBookings.map(booking=><BookingListCard booking={booking} key={booking._id}></BookingListCard>)
            }
        </div>
    );
};

export default BookingList;