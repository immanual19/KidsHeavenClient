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
        <div className="py-3">
        <div style={{margin:'0 auto'}} className="w-75">
        <h1>Our Branches</h1>
        <p>Explore all our branches in your preferred location.</p>
        </div>
        <br/><br/>
        <section className="outlet-container">
        {
            branches.map(branch=><OutletCard branch={branch}></OutletCard>)
        }
        </section>
        </div>
        
    );
};

export default Branches;