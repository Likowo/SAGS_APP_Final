import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as servicesService from '../../utilities/services-service';

function UpdateService() {
 
  const [allServices, setAllServices] = useState({
    _id:"",
    serviceName:"",
    serviceType:"",
    beingOffered:""
  });
  const id = useParams().id;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAllServices({
      ...allServices,
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
    const newEditData = {...allServices};
    // or
    // const {name, email, password} = formData

    const res = await servicesService.edit(newEditData)
   console.log(res)
  } catch(err) { //TODO:
    // An error occurred
    setAllServices({...allServices, error: 'Edit Failed - Try Again'})
  }
  navigate('/home')
}

  console.log(" Want to call editbyid")

useEffect(() => {
  console.log("Calling editbyid")
   axios.get(
    `/api/services/getservice/${id}`
  ).then(
    res => {setAllServices(res.data);}
  );
  console.log("Finished Calling edittbyid")
}, []);
  
    return (
      <div>
          <h1>Form to edit a service</h1>
           {/* NOTE: action will be the route, method will be the HTTP Method. NB: HTTP verb is Create, while HTTP method is POST */}
           <form onSubmit={handleSubmit} action={`/update/submit/${id.id}?_method=PUT`} method='POST' >
              Service Name: <input type="text" name='serviceName' value={allServices.serviceName}  onChange={handleChange} /> <br />
              Service Type: <input type="text" name='serviceType' value={allServices.serviceType} onChange={handleChange} /> <br />    
           //TODO: Being offered?:{allServices.beingOffered?( <input type="checkbox" name='beingOffered' defaultValue={'True'} onChange={handleChange} />):(<input type="checkbox" name='beingOffered' value={'False'} onChange={handleChange} />)
              }
                <br />    
              <input type="submit" name='' value="Edit Service" />
              <button className="backBtn"> <Link to="/home" className='backBtnLink' >⬅️Back</Link></button>
          </form>       
      </div>
    )
}

export default UpdateService