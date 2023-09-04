import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CreateForm({allServices}) {
  const [createData, setCreateData] = useState({serviceName:"",serviceType:"",beingOffered:""});

  // The object passed to setCreateData is merged with the current createData object
//   const handleChange = (e) => {
//     setCreateData({
//       ...createData,
//       [e.target.name]: e.target.value,
//     });
//   };
// console.log(handleChange('handle change working'))

  return (
    <div>
        <h1>Form to create a new service</h1>
         {/* NOTE: action will be the route, method will be the HTTP Method. NB: HTTP verb is Create, while HTTP method is POST */}
         <form action="/api/services/" method='POST'>
            Service Name: <input type="text" name='name' /> <br />
                    Type: <input type="text" name='type' /> <br />    
            <input type="submit" name='' value="Create New Service" />
            <Link to="/home" >⬅️Back</Link>
        </form>       
    </div>
  )
}

export default CreateForm;