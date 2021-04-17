import React, { useState } from 'react';
import { useForm } from '../../../../node_modules/react-hook-form';
import axios from 'axios';
const AddPremiumService = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [isImageUploaded, setIsImageUploaded]=useState(false);
    const onSubmit = data =>{
        const serviceInfo={...data};
        serviceInfo.imageURL=imageURL;
        console.log('Service infos are: ',serviceInfo);

        fetch('https://tranquil-citadel-82136.herokuapp.com/addService',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(serviceInfo)
        })
        .then(response=>response.json())
        .then(data=>{
            if(data){
                alert('Premium Service Added Successfully');
                document.getElementById('name').value='';
                document.getElementById('ageGroup').value='';
                document.getElementById('price').value='';
                document.getElementById('validity').value='';
                document.getElementById('image').value=null;
                window.location.reload();
            }
            else{
                alert('Error. Premium Service Could not be added');
            }
        })
    }
    const handleImageUpload=event=>{
    
        const imageData=new FormData();
        imageData.set('key','719b813f1fc7180188ff5aea2438160c');
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
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "lightGray" }}>
            <h5 className="text-brand">Add a Premium Service</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    
                    <input id="name" ref={register({ required: true })} type="text" className="form-control" name="name" placeholder="Enter a service name (Ex: History)" />
                </div>
                <div className="form-group">
                <input id="ageGroup" ref={register({ required: true })} type="text" className="form-control" name="ageGroup" placeholder="Enter age group (Ex: 2-7 years)" />
            </div>
                <div className="form-group">
                    <input id="validity" ref={register({ required: true })} type="text" className="form-control" name="validity" placeholder="Enter validity (Ex: 12 weeks)" />
                </div>
                <div className="form-group">
                    
                    <input id="price" ref={register({ required: true })} type="text" className="form-control" name="price" placeholder="Enter price (Ex: 25)" />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Upload a image</label>
                    <input id="image" onChange={handleImageUpload} type="file" className="form-control" placeholder="Picture" />
                </div>
                {
                    isImageUploaded?<button type="submit" className="btn btn-primary">Submit</button>:<button type="submit" className="btn btn-primary" disabled>Please Wait</button>
                }
            </form>
        </div>
    </section>
        </section>
    );
};

export default AddPremiumService;