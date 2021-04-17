import React, { useState } from 'react';
import { useForm } from '../../../../node_modules/react-hook-form';
import axios from 'axios';
const AddBranch = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [isImageUploaded, setIsImageUploaded]=useState(false);
    const onSubmit = data =>{
        const branchInfo={...data};
        branchInfo.imageURL=imageURL;
        console.log('Service infos are: ',branchInfo);

        fetch('https://tranquil-citadel-82136.herokuapp.com/addABranch',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(branchInfo)
        })
        .then(response=>response.json())
        .then(data=>{
            if(data){
                alert('Branch added successfully');
                document.getElementById('name').value='';
                document.getElementById('location').value='';
                document.getElementById('image').value=null;
                window.location.reload();
            }
            else{
                alert('Branch could not be added');
            }
        })
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
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "lightGray" }}>
            <h5 className="text-brand">Add a new Branch</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input id="name" ref={register({ required: true })} type="text" className="form-control" name="name" placeholder="Enter Branch's Name (Ex: Heaven's Gate)" />
                </div>
                <div className="form-group">
                    <input id="location" ref={register({ required: true })} type="text" className="form-control" name="location" placeholder="Enter Branch's Location (Ex: Dhaka, Bangladesh)" />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Upload a image</label>
                    <input onChange={handleImageUpload} type="file" className="form-control" id="image" placeholder="Picture" />
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

export default AddBranch;