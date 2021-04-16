import React, { useEffect, useState } from 'react';
import OutletCard from '../OutletCard/OutletCard';
import blueHeaven from '../../../images/out/blueHeaven.jpg';
import pinkHeaven from '../../../images/out/pinkHeaven.jpg';
import heavensDoor from '../../../images/out/heavensDoor.jpg';
import './Branches.css';
const outlets=[
    {
        name:'Blue Heaven',
        address:'Dhaka, Bangladesh',
        image:blueHeaven
    },
    {
        name:'Pink Heaven',
        address:'Rangpur, Bangladesh',
        image:pinkHeaven
    },
    {
        name:"Heaven's Door",
        address:'Chittagong, Bangladesh',
        image:heavensDoor
    }
]
const Branches = () => {

    const [branches,setBranches]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/getAllBranches')
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