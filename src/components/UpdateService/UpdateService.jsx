import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateService() {
 
  const [allServices, setAllServices] = useState("");
  const [editData, setEditData] = useState("");
  const id = useParams().id;
  const navigate = useNavigate();

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