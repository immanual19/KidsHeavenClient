import React, { useEffect, useState } from 'react';
import PremiumServiceCard from './PremiumServiceCard';
import './PremiumService.css';
const PremiumService = () => {
    const [premiumService,setPremiumService]=useState([]);

    useEffect(()=>{
        fetch('https://tranquil-citadel-82136.herokuapp.com/getPremiumService')
        .then(response=>response.json())
        .then(data=>setPremiumService(data))
    },[])

   

    return (
        <div className="my-5">
        <h1>Our Premium Services</h1>
        <p>Here comes the best part. Premium services includes everything your kid needs (ex. education, sports etc) and the basic services are also included.</p>
        <br/><br/>
        <section className="premium-service-container">
        {
            premiumService.map(service=><PremiumServiceCard key={premiumService._id} service={service}></PremiumServiceCard>)
        }
        </section>
        </div>
    );
};

export default PremiumService;