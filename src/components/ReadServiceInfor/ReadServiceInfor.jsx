import React, { useEffect, useState } from "react";
import axios from "axios"; // React Library Used to send and receive data from Backend
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function ReadServiceInfor(service) {
    const [allServices, setAllServices] = useState("");
    const id = useParams();

  const getAllServices = async () => {
    const response = await axios.get(
      "http://localhost:3001/api/services/getallservices" + id
    );
    setAllServices(response.data);
    console.log("reading information",response.data);
  };

  // console.log("checking return", allServices);
  useEffect(() => {
   const read = getById;
  }, []);

  return (
    <div>
          <div>
            <h3>Service Information</h3>
            <div>
            <div>
              <strong>Service Name: {service.serviceName}</strong>
          </div>
          <div>
              <strong>Service Type: {service.serviceType}</strong>
          </div>
          <div>
              <strong>Being Offered?: {service.beingOffered}</strong>
          </div>
          <Link to={`/edit/${id}`} >EDIT</Link>
          <Link to="/home" >⬅️Back</Link>

{/*               
            {allServices.map((service, index) => {
           
            })} */}
            </div>
            
          </div> 
    </div>
  )}


export default ReadServiceInfor;

/////////////////////
// let serviceInfor =[]
//     read.then(results =>{
//       results.map((current)=>{
//           // if (first){
//           serviceInfor.push(current)
//           setAllServices(serviceInfor.slice(0,serviceInfor.length).reverse())
//           console.log('do i ever go');
//       })
//   })