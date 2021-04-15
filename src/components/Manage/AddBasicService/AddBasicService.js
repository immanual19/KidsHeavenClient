import React, { useState } from 'react';
import { useForm } from '../../../../node_modules/react-hook-form';
import axios from 'axios';
const AddBasicService = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [isImageUploaded, setIsImageUploaded]=useState(false);
    const onSubmit = data =>{
        const serviceInfo={...data};
        serviceInfo.imageURL=imageURL;
        console.log('Service infos are: ',serviceInfo);

        fetch('http://localhost:8080/addBasicService',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(serviceInfo)
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
    }
    const handleImageUpload=event=>{
    
        const imageData=new FormData();
        imageData.set('key','df37e18a03602906e48312132d91183f');
        imageData.append('image',event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
          setIsImageUploaded(true);
          setIMageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          
        });
        }
    return (
        <section className="my-3">
        <section className="container-fluid row">
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add a Service</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input ref={register({ required: true })} type="text" className="form-control" name="name" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Validity</label>
                    <input ref={register({ required: true })} type="text" className="form-control" name="validity" placeholder="Enter Validity" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Price</label>
                    <input ref={register({ required: true })} type="text" className="form-control" name="price" placeholder="Enter Price" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Upload a image</label>
                    <input onChange={handleImageUpload} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                {
                    isImageUploaded && <button type="submit" className="btn btn-primary">Submit</button>
                }
            </form>
        </div>
    </section>
        </section>
    );
};

export default AddBasicService;