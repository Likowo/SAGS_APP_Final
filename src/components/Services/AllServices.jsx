import React, { useEffect, useState } from 'react'
import axios from "axios";  // Used to send and receive data from Backend 


function AllServices() {
    const [allServices, setAllServices] = useState('');

    const getAllServices= async() => {
        const response = await axios.get("http://localhost:3001/api/services/getallservices")
        setAllServices(response.data);
        console.log(response.data)
    }

    useEffect(() => {
        getAllServices()
    },[]);

  return (
    <div>
             <h1>All services</h1>
           {/* //TODO:  To show all service on brower, do a map* */}
    </div>
   
  )
}

export default AllServices;