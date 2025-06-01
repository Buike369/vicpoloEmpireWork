import React,{useState} from 'react'
import "./testimony.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {faArrowRight,faArrowLeft} from "@fortawesome/free-solid-svg-icons"


const Testimony = () => {
    

  
  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 584 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 584, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

  
  const ButtonOne =({onClick})=>{
  return(
    <div className='postKin' onClick={onClick}><FontAwesomeIcon icon={faArrowLeft}   style={{fontSize:"15px"}} /></div>
  )
}

const ButtonTwo =({onClick})=>{
  return(
    <div className='postKin' onClick={onClick}><FontAwesomeIcon icon={faArrowRight}   style={{fontSize:"15px"}} /></div>
  )
};

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group"> 
      <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
      <ButtonTwo onClick={() => next()} />
     
    </div>
  );
};

  return (
    <div className="testimonyDiv">
        <div className="WhatD">
         <div className="Rtme">
        {/* <div className='TheyAre' data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear">They are talking about us</div> */}
          <div className='DonTake' >Customer Feedback</div>
          <div className='seeWhat' >Discover why our clients love working with us! Read their testimonials and see how we’ve made a difference for them</div>
         {/* <div className="divUnder1"></div> */}
         <div className=" marginMu fadama " >
         <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive2}
   arrows={false} 
   renderButtonGroupOutside={true}
    customButtonGroup={<ButtonGroup />}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlay={false}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={false}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  
>
 <div style={{padding:"4px 15px"}}>      
<div className="earnSayPp">
  <div className='sHe1'></div>
  {/* <img src="/img/eme1.svg" alt="" className='sHe'/> */}
  <p className="partnerShip">"The team at VicpoloEmpire exceeded our expectations with their creativity and professionalism, delivering a product that truly reflected our vision and values."</p>
  <div className="favourPath">
    <div><img src="/pho.avif" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Sarah Johnson</div>
      <div className="country">CHIBEST Cookies</div>
     </div>
  </div>
</div>
</div> 
 <div style={{padding:"4px 15px"}}>           
<div className="earnSayPp">
  {/* <img src="/photo.avif" alt="" className='sHe'/> */}
  <p className="partnerShip">"Innovative solutions and seamless support. VicpoloEmpire delivers excellence"</p>
  <div className="favourPath">
    <div><img src="/pho.avif" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Frak  Bosco</div>
      <div className="country">BRANS Enterprise</div>
     </div>
  </div>
</div>
</div>
<div style={{padding:"4px 15px"}}>
<div className="earnSayPp">
  {/* <img src="/img/eme1.svg" alt="" className='sHe'/> */}
  <p className="partnerShip">"

VicpoloEmpire transformed our brand with stunning visuals and effective marketing strategies."</p>
  <div className="favourPath">
    <div><img src="/pho.avif" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Michael Smith</div>
      <div className="country">Los Angeles</div>
     </div>
  </div>
</div>
</div>
<div style={{padding:"4px 15px"}}>
<div className="earnSayPp">
  {/* <img src="/img/eme1.svg" alt="" className='sHe'/> */}
  <p className="partnerShip">"The team at VicpoloEmpire exceeded our expectations with their creativity and professionalism, delivering a product that truly reflected our vision and values."</p>
  <div className="favourPath">
    <div><img src="/pho.avif" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Sarah Johnson</div>
      <div className="country">New York</div>
     </div>
  </div>
</div>
</div>
         
          </Carousel>
        </div>





                 
          </div>  
     

        
      </div>
  
    </div>
  )
}

export default Testimony