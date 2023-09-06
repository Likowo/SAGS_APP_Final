import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import {Fade, Zoom, Slide, } from 'react-slideshow-image';

// const [serviceImage, setServiceImage] = useState('')
const serviceImages = [
  {
 serviceType: "FoodHandle and Alcohol Server Training Course",
 image:(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMoxhEGTE_e9_lp2ngSiA7oXmIdEJQFPCuw&usqp=CAU`),
//  image:(`https://www.cherylslastcall.com/images/alcohol-server-permit-waitress.gif`),
 }, 
 {
  serviceType: `Food Manager Procto Services`,
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
  height: "400px",
  border:"solid black 2px",
  width: "400px",
  backgroundsize: "cover",
  display: "flex",
  alignitems: "center",
  justifycontent: "center"
 }

 const spanStyle = {
  fontSize: "20px",
  background:"#efefef",
  color: "#000000"
 }

  
const ImageSlider = () => {
  
  return (
    <div className='slide-container' >
      <Slide>
        {serviceImages.map((pic, index)=> {
            return (
                <div key={index} >
                <div style={{ ...divStyle, 'backgroundImage': `url(${pic.image})`}}>
                  <span style={spanStyle}>{pic.serviceType}</span>
                </div>
            </div>)
        })}
      </Slide>
    </div>
  )
}

export default ImageSlider;