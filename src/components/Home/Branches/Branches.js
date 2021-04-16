import React, { useEffect, useState } from 'react';
import OutletCard from '../OutletCard/OutletCard';
import './Branches.css';

const Branches = () => {

    const [branches,setBranches]=useState([]);

    useEffect(()=>{
        fetch('https://tranquil-citadel-82136.herokuapp.com/getAllBranches')
        .then(res=>res.json())
        .then(data=>setBranches(data))
    },[])

    return (
        <div>
        <h1>Our Branches</h1>
        <section className="outlet-container">
        {
            branches.map(branch=><OutletCard branch={branch}></OutletCard>)
        }
        </section>
        </div>
        
    );
};

export default Branches;