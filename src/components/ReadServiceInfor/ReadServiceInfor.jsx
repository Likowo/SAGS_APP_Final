import React, { useEffect, useState } from "react";
import axios from "axios"; // React Library Used to send and receive data from Backend
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function ReadServiceInfor(service) {
    const [allServices, setAllServices] = useState("");
    const {id} = useParams();

  const getAllServices = async () => {
    const response = await axios.get(
      "http://localhost:3001/api/services/getallservices" + id
    );
    setAllServices(response.data);
    console.log(response.data);
  };

  console.log("checking return", allServices);
  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <div>
          <div>
            <h3>Service Information</h3>
            <div>
                <strong>Service Name: {service.serviceName}</strong>
            </div>
            <div>
                <strong>Service Type: {service.serviceType}</strong>
            </div>
            <div>
                <strong>Being Offered?: {service.beingOffered}</strong>
            </div>
            <Link to={`/api/services/editservice/${id}`} >EDIT</Link>
            <Link to="/home" >⬅️Back</Link>
          </div> 
    </div>
  )
}

export default ReadServiceInfor