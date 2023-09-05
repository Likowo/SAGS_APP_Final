import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as servicesService from '../../utilities/services-service';

function UpdateService() {
 
  const [allServices, setAllServices] = useState("");
  const [editData, setEditData] = useState("");
  const id = useParams().id;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };
// console.log(handleChange('handle change working'))

 // on submit alert current state
 const handleSubmit = async (e) =>  {
  e.preventDefault() // Prevent form from being submitted to the server
  try {
    // We don't want to send the 'error' or 'confirm' property,
    // so let's make a copy of the state object, then delete them
    const newEditData = {...editData};
    delete newEditData.error;
    delete newEditData.confirm;
    // or
    // const {name, email, password} = formData

    const user = await servicesService.edit(newEditData)
    setAllServices(newEditData)
   
  } catch(err) {
    // An error occurred
    setEditData({...editData, error: 'New Entry Failed - Try Again'})
  }
  navigate('/home')
}

  console.log(" Want to call editbyid")

useEffect(() => {
  console.log("Calling editbyid")
   axios.put(
    `http://localhost:3001/api/services/editservice/${id}`
  ).then(
    res => {setAllServices(res.data);}
  );
  console.log("Finished Calling edittbyid")
}, []);
  
    return (
      <div>
          <h1>Form to edit a service</h1>
           {/* NOTE: action will be the route, method will be the HTTP Method. NB: HTTP verb is Create, while HTTP method is POST */}
           <form onSubmit={handleSubmit}>
              Service Name: <input type="text" name='serviceName' onChange={handleChange} /> <br />
              Service Type: <input type="text" name='serviceType' onChange={handleChange} /> <br />    
              <input type="submit" name='' value="Edit Service" />
              <button> <Link to="/home" >⬅️Back</Link></button>
          </form>       
      </div>
    )
}

export default UpdateService