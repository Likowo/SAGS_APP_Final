import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import {Fade, Zoom, Slide, } from 'react-slideshow-image';
// import './ImageSlider.module.css'

const serviceImages = [
  {
 serviceType: "FoodHandler and Alcohol Server Training Courses",
 image:(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMoxhEGTE_e9_lp2ngSiA7oXmIdEJQFPCuw&usqp=CAU`),
//  image:(`https://www.cherylslastcall.com/images/alcohol-server-permit-waitress.gif`),
 }, 
 {
  serviceType: `Food Manager Proctor Services`,
  image:(`https://cdn.statefoodsafety.com/blog/2019/08/proctor_supervise_examinee-compressor.jpg`),
  }, 
  {
    serviceType: `Notary Services`,
    image:(`https://s3-media0.fl.yelpcdn.com/bphoto/DqtJzRkxdlE9hROQ_qsbDg/300s.jpg`),
    }, 
    {
      serviceType: `DJ Services`,
      image:(`https://media.tenor.com/zuYQRDdHhyYAAAAM/dj-neon.gif`),
      },    
 ];

 const divStyle = {
  height: "450px",
  border:"solid black 2px",
  width: "700px",
  ["background-size"]: "cover",
  background: "no-repeat",
  display: "flex",
  alignitems: "center",
  justifycontent: "center"
 }

 const spanStyle = {
  border:"solid black 2px",
  height:"100px",
  width:"100px",
  fontSize: "20px",
  padding: "20px",
  background:"#efefef",
  color: "#000000",
  aligntext: "center",
 }

 const slideContainer = {
  height: "450px",
  border:"solid red 8px",
  width: "700px",
 }

  
const ImageSlider = () => {
  
  return (
    <div className='slideContainer' >
      <>
        {serviceImages.map((pic, index)=> {
            return (
                <div key={index} >
                <div style={{ ...divStyle, 'backgroundImage': `url(${pic.image})` }}>
                  <span style={spanStyle}>{pic.serviceType}</span>
                </div>
            </div>)
        })}
      </>
    </div>
  )
}

export default ImageSlider;