import React, { useEffect, useState } from "react";
import axios from "axios"; // React Library Used to send and receive data from Backend
import { Link } from "react-router-dom";

function AllServices() {
  const [allServices, setAllServices] = useState("");

  const getAllServices = async () => {
    const response = await axios.get(
      "http://localhost:3001/api/services/getallservices"
    );
    setAllServices(response.data);
    console.log(response.data);
  };

  console.log("checking return", allServices);
  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <div className="tableMainContainer" >
      <h1>All Services</h1>

      <div className="w-75 rounded bg-red border shadow p-4">
        <div className="d-flex jsutify-content-end">
          <Link to="/api/services" className="btn btn-success">
            Create a New Service
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>SERVICE NAME</th>
              <th>SERVICE TYPE</th>
              <th>BEING OFFERED?</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {allServices
              ? allServices.map((service, index) => {
                return  (
                  <tr key={index}>                 
                    <td>{service.id}</td>
                    <td>{service.serviceName}</td>
                    <td>{service.serviceType}</td>
                    <td>{service.beingOffered}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">
                        EDIT
                      </button>
                      <button  className="btn btn-sm btn-primary me-2">GET/READ</button>
                      <button className="btn btn-sm btn-danger">DELETE</button>
                    </td>
                  </tr>);
                })
              : ""}
          </tbody>
        </table>
      </div>
      {/* //TODO:  To show all service on brower, do a map* */}
    </div>
  );
}

export default AllServices;

////////////////////////
// {allServices?allServices.map((service,index) => {
//   return (
//    <div className='serviceOffred' >
//    <h1 key={index}>{service.serviceName}</h1>
//    <h3 key={index}>{service.serviceType}</h3>
//    <h3 key={index}>{service.beingOffered}</h3>
//    <button>EDIT</button>
//    <button>GET/READ</button>
//    <button>DELETE</button>
//    </div>
//   )
// }):""}
