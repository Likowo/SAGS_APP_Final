import React, { useEffect, useState } from 'react'
import axios from "axios";  // React Library Used to send and receive data from Backend 


function AllServices() {
    const [allServices, setAllServices] = useState('');

    const getAllServices= async() => {
        const response = await axios.get("http://localhost:3001/api/services/getallservices")
        setAllServices(response.data);
        console.log(response.data)
    }
 
    console.log("checking return", allServices)
    useEffect(() => {
        getAllServices()
    },[]);

  return (
    <div>
             <h1>All Services</h1>
             <nav>
                <a href="/api/services">Create a New Service</a>
             </nav>
           {/* //TODO:  To show all service on brower, do a map* */}
           {allServices?allServices.map((service,index) => {
        
               return (
                <div className='serviceOffred' >
                <h1 key={index}>{service.serviceName}</h1>
                <h3 key={index}>{service.serviceType}</h3>
                <h3 key={index}>{service.beingOffered}</h3>
                <button>EDIT</button>
                <button>DELETE</button>
                </div>
                
               )
           }):""}
    </div>
   
  )


}

export default AllServices;