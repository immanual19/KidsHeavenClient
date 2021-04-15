import React, { useEffect, useState } from 'react';
import './BasicService.css';
import BasicServiceCard from './BasicServiceCard';
const BasicService = () => {

    const [basicService,setBasicService]=useState([]);

    useEffect(()=>{
        fetch('https://tranquil-citadel-82136.herokuapp.com/getBasicService')
        .then(response=>response.json())
        .then(data=>setBasicService(data))
    },[basicService])
    return (
        <div className="my-5">
        <h1>Our Basic Services</h1>
        <section className="basic-service-container">
        {
            basicService.map(service=><BasicServiceCard key={service._id} service={service}></BasicServiceCard>)
        }
        </section>
        </div>
    );
};

export default BasicService;