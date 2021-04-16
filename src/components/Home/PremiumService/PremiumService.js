import React, { useEffect, useState } from 'react';
import PremiumServiceCard from './PremiumServiceCard';
import './PremiumService.css';
const PremiumService = () => {
    const [premiumService,setPremiumService]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/getPremiumService')
        .then(response=>response.json())
        .then(data=>setPremiumService(data))
    },[])

   

    return (
        <div className="my-5">
        <h1>Our Premium Services</h1>
        <section className="premium-service-container">
        {
            premiumService.map(service=><PremiumServiceCard key={premiumService._id} service={service}></PremiumServiceCard>)
        }
        </section>
        </div>
    );
};

export default PremiumService;