import React, { useEffect, useState } from 'react';
import PremiumServiceCard from './PremiumServiceCard';
import './PremiumService.css';
const PremiumService = () => {
    const [premiumService,setPremiumService]=useState([]);

    useEffect(()=>{
        fetch('https://tranquil-citadel-82136.herokuapp.com/getPremiumService')
        .then(response=>response.json())
        .then(data=>setPremiumService(data))
    },[premiumService])
    return (
        <div className="my-5">
        <h1>Our Premium Services</h1>
        <section className="premium-service-container">
        {
            premiumService.map(service=><PremiumServiceCard service={service}></PremiumServiceCard>)
        }
        </section>
        </div>
    );
};

export default PremiumService;