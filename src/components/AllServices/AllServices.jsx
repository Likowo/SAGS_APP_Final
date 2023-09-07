import React, { useEffect, useState } from "react";
import axios from "axios"; // React Library Used to send and receive data from Backend
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AllServices() {
  const [allServices, setAllServices] = useState("");
  const [removeData, setRemoveData] = useState("");
  const navigate = useNavigate();

  const getAllServices = async () => {
    const response = await axios.get(
      "/api/services/getallservices"
    );
    setAllServices(response.data);
    console.log(response.data);
  };

  console.log("checking return", allServices);
  useEffect(() => {
    getAllServices();
  }, [removeData]);

  const handleDelete = (_id) => {
    const confirm = window.confirm("Are you sure you want to Delete?");
    if (confirm) {
      axios
        .delete("/api/services/deleteone/" + _id)
        .then((res) => {
          setRemoveData(res.data)
          return getAllServices;
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="tableMainContainer">
      <h1 className="allServicesHeader">★彡 Aͣl̾l̾ S̾eͤrͬv̾iͥcͨeͤs̾ 彡★</h1>

      <div className="w-75 rounded bg-red border shadow p-4">
        <div className="d-flex jsutify-content-end">
          <Link to="/add" className="createBtnLink">
           <button className="createBtn"> Add New Service</button>
          </Link>
        </div>
        <table className="table-striped">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>SERVICE NAME</th>
              <th>SERVICE TYPE</th>
              <th>BEING OFFERED?</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {allServices
              ? allServices.map((service, index) => {
                  return (
                    <tr key={index}>
                      {/* <td>{service.id}</td> */}
                      <td>{service.serviceName}</td>
                      <td>{service.serviceType}</td>
                      <td>{service.beingOffered}</td>
                      <td>
                        <button>
                          {""}
                          <Link to={`/edit/${service._id}`}>EDIT</Link>
                        </button>
                        <button>
                          <Link
                            to={`/read/${service._id}`}
                            className="btn btn-sm btn-primary me-2"
                          >
                            READ
                          </Link>
                        </button>
                        <button
                          onClick={(e) => handleDelete(service._id)}
                          className="btn btn-sm btn-danger"
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
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
