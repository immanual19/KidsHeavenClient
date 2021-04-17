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
        fetch('https://tranquil-citadel-82136.herokuapp.com/postReview',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(reviewInfo)
        })
        .then(response=>response.json())
        .then(data=>{
            if(data){
                alert('Review posted successfully');
                document.getElementById('name').value='';
                document.getElementById('rating').value='';
                document.getElementById('description').value='';
            }
            else{
                alert('Error. Review could not be posted');
            }
        })
    }

    return (
        <section className="my-3">
        <section className="container-fluid row">
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "lightGray" }}>
            <h5 className="text-brand">Write a beautiful Review</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input id="name" ref={register({ required: true })} type="text" className="form-control" name="name" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Rating out of 10</label>
                    <input id="rating" ref={register({ required: true })} type="text" className="form-control" name="rating" placeholder="Rating" />
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputPassword1">Short Description</label>
                <textarea id="description" ref={register({ required: true })} type="text" className="form-control" name="description" placeholder="Description" >
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