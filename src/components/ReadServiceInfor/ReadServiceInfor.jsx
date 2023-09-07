import React, { useEffect, useState } from "react";
import axios from "axios"; // React Library Used to send and receive data from Backend
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import Services from "../../../models/Services";

function ReadServiceInfor(Services) {
  const [allServices, setAllServices] = useState("");
  const id = useParams().id;

  console.log(" Want to call getbyid");

  useEffect(() => {
    console.log("Calling getbyid");
    axios
      .get(`/api/services/getservice/${id}`)
      .then((res) => {
        setAllServices(res.data);
      });
    console.log("Finished Calling getbyid");
  }, []);
  console.log("Git test");
  return (
    <div>
      <div>
        <h3 className="serviceInforheader">╚»★«╝ 𝕊𝕖𝕣𝕧𝕚𝕔𝕖 𝕀𝕟𝕗𝕠𝕣𝕞𝕒𝕥𝕚𝕠𝕟 ╚»★«╝</h3>
        <div>
          <div className="serviceInfor">
            <strong>Service Name: {allServices.serviceName}</strong>
          </div>
          <div className="serviceInfor" >
            <strong>Service Type: {allServices.serviceType}</strong>
          </div>
          <div className="serviceInfor" >
            <strong>Being Offered?: {String(allServices.beingOffered)}</strong>
          </div>
          <button className="editBtn">
            {" "}
            <Link to={`/edit/${id}`} className="editBtnLink" >EDIT</Link>
          </button>
          <br />

          <button className="backBtn">
            {" "}
            <Link to="/home" className='backBtnLink' >⬅️Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

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

// const getById = async () => {
//   const response = await axios.get(
//     // console.log("Calling getbyid")
//     `http://localhost:3001/api/services/getservice/${id}`
//   );
//   console.log("Finished Calling getbyid")
//   setAllServices(response.data);
//  // console.log('this is the response data')
//  // console.log(response)
//   console.log("reading information",response.data);
// };
// console.log('this is the service name')
// console.log(setAllServices)
// // console.log("checking return", allServices);
