import React, { useEffect, useState } from 'react';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
const Book = (props) => {
    

    const id=props.serviceId;
    let paymentInformations={};

    const [singleService,setSingleService]=useState([]);
    const userInfo=JSON.parse(localStorage.getItem('userInfo'));
    useEffect(()=>{
        fetch('https://tranquil-citadel-82136.herokuapp.com/getFromAllServices',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({id})
        })
        .then(response=>response.json())
        .then(data=>{

            setSingleService(data[0]);
        })
    },[])


    paymentInformations.userName=userInfo.name;
    paymentInformations.userEmail=userInfo.email;
    paymentInformations.serviceName=singleService.name;
    paymentInformations.servicePrice=singleService.price;
    paymentInformations.serviceStatus='Pending';
    localStorage.setItem('paymentInfo',JSON.stringify(paymentInformations));
    return (
     
        <div className="row">
        <div className="col-md-6">
        <form>
                <div className="form-group">
                    <label htmlFor="name">User Name</label>
                    <input type="text" className="form-control" name="name" placeholder="User Name" value={userInfo.name} readOnly/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">User Email</label>
                    <input type="text" className="form-control" name="email" placeholder="User Email" value={userInfo.email} readOnly/>
                </div>
                <div className="form-group">
                    <label htmlFor="serviceName">Service name</label>
                    <input type="text" className="form-control" name="serviceName" placeholder="Service Name" value={singleService.name} readOnly/>
                </div>
                <div className="form-group">
                    <label htmlFor="serviceName">Price</label>
                    <input type="text" className="form-control" name="servicePrice" placeholder="Service Price" value={singleService.price} readOnly/>
                </div>
            </form>
            <ProcessPayment></ProcessPayment>
        </div>
        
        <div className="col-md-6">
        
        </div>
            
        </div>
    );
};

export default Book;