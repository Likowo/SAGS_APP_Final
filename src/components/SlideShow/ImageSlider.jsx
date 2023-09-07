import React from 'react';
import 'react-slideshow-image/dist/styles.css';
// import ImageSlider from '../../components/SlideShow/ImageSlider';
import {Fade, Zoom, Slide, } from 'react-slideshow-image'


const serviceImages = [
  {
 serviceType: "FoodHandler and Alcohol Server Training Courses",
  image:(`https://graphicsart.b-cdn.net/clip-art/image_files/image/3/1586493-300_jpg_waitress-server-food.jpg`),

 }, 
 {
  serviceType: `Food Manager Proctor Services`,
  image:(`https://png.pngtree.com/png-vector/20210329/ourmid/pngtree-online-online-online-teaching-classroom-illustration-png-image_3159323.jpg`),
  }, 
  {
    serviceType: `Notary Services`,
    image:(`https://p7.hiclipart.com/preview/820/262/450/notary-public-wedding-singapore-company-photographer-notary-public-thumbnail.jpg`),
    // image:(`https://s3-media0.fl.yelpcdn.com/bphoto/DqtJzRkxdlE9hROQ_qsbDg/300s.jpg`),
    }, 
    {
      serviceType: `DJ Services`,
      image:(`https://media.tenor.com/zuYQRDdHhyYAAAAM/dj-neon.gif`),
      },    
 ];

 const divStyle = {
  height: "400px",
  // width: "300px",
  border:"solid black 2px",
  backgroundsize: "cover",
  background: "no-repeat",
  display: "flex",
  alignitems: "center",
  justifyContent: "center"
  // ["backgroundsize"]: "cover",
 }

 const spanStyle = {
  // height:"53px",
  // width:"auto",
  fontSize: "20px",
  padding: "20px",
  color: "#00B4D8",
  // background:"#efefef",
  // margin:"2px",
  // aligntext: "center",
  // alignitems:"right"
 }

 const ImageSlider =() => { 
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

////////////////////////////////
// const resizeObserver = new ResizeObserver(entries => {
//   // We wrap it in requestAnimationFrame to avoid this error - ResizeObserver loop limit exceeded
//   window.requestAnimationFrame(() => {
//     if (!Array.isArray(entries) || !entries.length) {
//       return;
//     }
//     <Slide>
//         {serviceImages.map((pic, index)=> {
//           return (
//                 <div key={index} >
//                 <div style={{ ...divStyle, 'backgroundImage': `url(${pic.image})` }}>
//                   <span style={spanStyle}>{pic.serviceType}</span>
//                 </div>
//             </div>)
//         })}
//       </Slide>
//   });
// });


////////////////////////
// const ImageSlider = () => { 
//   return (
//     <div className='slideContainer' >
//       <Slide>
//         {serviceImages.map((pic, index)=> {
//           return (
//                 <div key={index} >
//                 <div style={{ ...divStyle, 'backgroundImage': `url(${pic.image})` }}>
//                   <span style={spanStyle}>{pic.serviceType}</span>
//                 </div>
//             </div>)
//         })}
//       </Slide>
//     </div>
//   )
// }