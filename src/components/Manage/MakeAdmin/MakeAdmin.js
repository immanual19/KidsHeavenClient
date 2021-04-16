import React, { useEffect, useState } from 'react';
import { useForm } from '../../../../node_modules/react-hook-form';
const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit=data=>{
        const email=data.email;
                fetch('http://localhost:8080/makeAdmin',{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(data)
                })
                .then(response=>response.json())
                .then(data=>{
                    if(data){
                        alert('Admin added successfully');
                        document.getElementById('email-field').value="";
                    }
                })
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Enter New Admin's Email:</label>
                    <input ref={register({ required: true })} id="email-field" type="email" className="form-control" name="email" placeholder="Enter Name" />
                    <button type="submit" className="btn btn-primary">Make Admin</button>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;