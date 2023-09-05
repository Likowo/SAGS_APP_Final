import React from 'react';

import { Link } from 'react-router-dom';

function UpdateService() {
 
  const [allServices, setAllServices] = useState("");
  const id = useParams().id;

  console.log(" Want to call getbyid")

useEffect(() => {
  console.log("Calling getbyid")
   axios.get(
    `http://localhost:3001/api/services/getservice/${id}`
  ).then(
    res => {setAllServices(res.data);}
  );
  console.log("Finished Calling getbyid")
}, []);
  
    return (
      <div>
          <h1>Form to create a new service</h1>
           {/* NOTE: action will be the route, method will be the HTTP Method. NB: HTTP verb is Create, while HTTP method is POST */}
           <form onSubmit={handleSubmit}>
              Service Name: <input type="text" name='serviceName' onChange={handleChange} /> <br />
              Service Type: <input type="text" name='serviceType' onChange={handleChange} /> <br />    
              <input type="submit" name='' value="Create New Service" />
              <button> <Link to="/home" >⬅️Back</Link></button>
          </form>       
      </div>
    )
}

export default UpdateService