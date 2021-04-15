import React from 'react';
import { useForm } from '../../../../node_modules/react-hook-form';

const PostReview = () => {
    const userInfo=JSON.parse(localStorage.getItem('userInfo'));
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data =>{
        console.log(data);
        const reviewInfo={...data};
        reviewInfo.userImage=userInfo.photo;
        reviewInfo.email=userInfo.email;
        console.log(reviewInfo);
        fetch('http://localhost:8080/postReview',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(reviewInfo)
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
    }

    return (
        <section className="my-3">
        <section className="container-fluid row">
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add a Branch</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input ref={register({ required: true })} type="text" className="form-control" name="name" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Rating out of 10</label>
                    <input ref={register({ required: true })} type="text" className="form-control" name="rating" placeholder="Rating" />
                </div>
                <div className="form-group">
                <textarea ref={register({ required: true })} type="text" className="form-control" name="description" placeholder="Description" >
                </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
        </section>
    );
};

export default PostReview;