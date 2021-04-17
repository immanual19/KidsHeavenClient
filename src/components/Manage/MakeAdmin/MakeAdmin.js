import React, { useEffect, useState } from 'react';
import { useForm } from '../../../../node_modules/react-hook-form';
const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit=data=>{
        const email=data.email;
                fetch('https://tranquil-citadel-82136.herokuapp.com/makeAdmin',{
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
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "lightGray" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Enter New Admin's Email:</label>
                    <input ref={register({ required: true })} id="email-field" type="email" className="form-control" name="email" placeholder="Enter Email" />
                    <button type="submit" className="btn btn-primary">Make Admin</button>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;