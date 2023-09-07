import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import create  from '../../utilities/services-service';
import * as servicesService from '../../utilities/services-service';


function CreateForm({setAllServices}) {
  const [createData, setCreateData] = useState("");

  const navigate = useNavigate();

  // The object passed to setCreateData is merged with the current createData object
  const handleChange = (e) => {
    setCreateData({
      ...createData,
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
    const newCreateData = {...createData};
    // delete newCreateData.error;
    // delete newCreateData.confirm;
    // or
    // const {name, email, password} = formData

    const user = await servicesService.create(newCreateData)
    setAllServices(newCreateData)
   
  } catch(err) {
    // An error occurred
    setCreateData({...createData, error: 'New Entry Failed - Try Again'})
  }
  navigate('/home')
}

  return (
    <div>
        <h1>╚»★«╝ 𝔸𝕕𝕕 ℕ𝕖𝕨 𝕊𝕖𝕣𝕧𝕚𝕔𝕖 ╚»★«╝</h1>
         {/* NOTE: action will be the route, method will be the HTTP Method. NB: HTTP verb is Create, while HTTP method is POST */}
         <form onSubmit={handleSubmit}>
            Service Name: <input type="text" name='serviceName' onChange={handleChange} /> <br />
            Service Type: <input type="text" name='serviceType' onChange={handleChange} /> <br />    
            <input type="submit" name='' value=" ADD SERVICE " />
            <Link to="/home" className='backBtnLink'  >⬅️Back</Link>
        </form>       
    </div>
  )
}

export default CreateForm;

////////////////////////////////
{/* <form action="/api/services/" method='POST'>
            Service Name: <input type="text" name='name' onChange={e => setCreateData({...createData, serviceName: e.target.value})} /> <br />
            Service Type: <input type="text" name='type'   onChange={e => setCreateData({...createData, serviceName: e.target.value})} /> <br />    
            <input type="submit" name='' value="Create New Service" />
            <Link to="/home" >⬅️Back</Link>
</form> */}