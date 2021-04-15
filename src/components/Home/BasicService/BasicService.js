import React, { useEffect, useState } from 'react';
import './BasicService.css';
import BasicServiceCard from './BasicServiceCard';
const BasicService = () => {

    const [basicService,setBasicService]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/getBasicService')
        .then(response=>response.json())
        .then(data=>setBasicService(data))
    },[])
    return (
        <div className="my-5">
        <h1>Our Basic Services</h1>
        <section className="basic-service-container">
        {
            basicService.map(service=><BasicServiceCard service={service}></BasicServiceCard>)
        }
        </section>
        </div>
    );
};

export default BasicService;