import React, {useEffect} from 'react'
import { useLocation } from 'react-router'
import 'aos/dist/aos.css'
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faPalette, faCameraRetro, faLaptopCode, faRobot } from '@fortawesome/free-solid-svg-icons';

import "./home.scss"
import  Slide from  "../../components/slide/slide"
import Testimony  from "../../components/testimony/testimony"

const Home = () => {

  const card =[{id:1, img:faLaptopCode, header:"Web Development", text:"We build dynamic, secure, user-friendly websites for everyone.",img2:"/mmm1.jpeg"},{id:2, img:faPalette, header:"AI Services", text:"We automate tasks, enhance decisions and drive business innovation efficiently ", img2:"/mmm2.jpeg"},{id:3, img:faCameraRetro, header:"Data Analysis", text:"We uncover insights, trends, and patterns for informed decision making.",img2:"/mmm3.jpeg"},{id:4,img: faVideo, header:'Graphic Design',text:"We creates visual content to communicate idea, messages, and branding.",img2:"/mmm.jpeg"},{id:5, img:faRobot, header:"Blockchain Technology", text:"We develop AI-powered, secure, user-friendly solutions for everyone.", img2:"/mmm4.jpeg"},{id:6, img:faRobot, header:"Other Services", text:"We offer tailored solutions to meet diverse business needs.", img2:"/loloK1.jpeg"}]
   const card1 =[{id:1,img:"/lolok3.jpeg", header:'Web Development',text:"We provide responsive web development, e-commerce solutions, custom applications, and API integrations using modern technologies for seamless user experiences"},{id:2,img:"/photong.avif", header:"AI Services", text:"We offer AI solutions, including chatbots, predictive analytics, automation, and machine learning models to enhance business efficiency and decision-making."},{id:3, img:'/lolok4.jpeg', header:"Data Analysis", text:"We provide data analysis services, including data visualization, predictive modeling, insights extraction, and reporting to drive informed business decisions."}]

     const { hash } = useLocation();

    useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]); useEffect(()=>{
    AOS.init({once: true});
    // AOS.init();
  },[])


  return (
    <div className='Section1' >

      <div className='sectionMain'>
        <div  className='col'></div>
                <div className='rrImg'>< FontAwesomeIcon icon={faCameraRetro} className="serviceIcon" /></div>
        <div className='rrImg'><img src="rrrepeat1.svg" alt="" /></div>
        <div className='sectionMainA'>
          <div  className='enn'>Transform Your <span >Digital Presence</span> with VicpoloEmpire</div>
          <p className='enn1'>Transforming ideas into stunning visual experiences for your business.</p>
         <a href="/services"><div className='rt'> <button>Discover</button></div></a>
        </div>
        <div className='sectionMainA ff '>
          <img src="/loloKs.jpeg" alt="" className='imgMain' />
        </div>

      </div>
      
  <div className="FFJ"></div>
<div  className='OurService'>
  <p className='OurServe' data-aos="fade-up" data-aos-duration="500"
             data-aos-easing="linear"  >Our Services</p>
  <div className='LineP'></div>
      <div className='Services'>
        {card.map((app)=>(
        <div className='serviceCard' key={app.id}  data-aos="fade-up" data-aos-duration="500"
             data-aos-easing="linear" >
          <div  className='FImg'>
            <img  src={app.img2} alt=""/>
           </div>
           <div  className='IconImg'>
< FontAwesomeIcon icon={app.img} className="serviceIcon" />
           </div>
          <p className='Vp'>{app.header}</p>
          <p className='Vp1'>{app.text}</p>

        </div>
        ))}
      </div>
      </div>

 <div className='FT'>
      <div className='Craft'  >
        <div className='Craft1 rtr'data-aos="fade-up" data-aos-duration="500"
             data-aos-easing="linear" >
          {/* <div className="CratU"></div> */}
          <div  className='Craft2'>What we do best</div>
          
          <p className='Craft3'>At VicpoloEmpire, we specialize in premium web development, AI services,  Data  analysis, Graphic design and Blockchain technology to help brands connect and engage with their audience through innovative visual experiences.</p>
   <div className='Craft7'>
  <div className='Craft4'>
    <div className='Craft5'>150+</div>
     <div className='Craft6'>Creative Excellence</div>
  </div>
  <div className='Craft4'>
    <div className='Craft5'>15</div>
     <div className='Craft6'>Trusted by Brands</div>
  </div>
 </div>
        </div>
        <div className='Craft1' data-aos="fade-up" data-aos-duration="500"
             data-aos-easing="linear" >
            <img src="/photo.avif"  alt=""  />
        </div>
      </div>
      </div>
      
<div  className="bb">
      <div className='MdSolutions'>
        <div className='MdSolutions1' data-aos="fade-right" data-aos-duration="500"
             data-aos-easing="linear"  >Excellence in Technology solutions  </div>
        <div className='TN'></div>
        <div className='MdSolutions2' data-aos="fade-right" data-aos-duration="500"
             data-aos-easing="linear" >We Transform Brands through our web development  job, create  graphic design work, render  AI services, blockchain projects,  and data analysis tailored for success.</div>

        <div  className='MdSolutions3'>
          {card1.map((app)=>(
          <div  key={app.id} className="MdSolutions4"data-aos="fade-up" data-aos-duration="500"
             data-aos-easing="linear"  >
              <div  className='MdSolutions5'><img src={app.img} alt=""className='mImg' /></div>
              <div className='MdSolutions6'>{app.header}</div>
              <div className='MdSolutions7'>{app.text}.</div>
          </div>

          ))}
         
        </div>
      </div>
      </div>

<div  className="GGa" id="portfolio">
      <div className="Ga" >
        <div className="Ga1" >Gallery Hub</div>
         <div className='TN'data-aos="fade-down" data-aos-duration="500"
             data-aos-easing="linear" ></div>
        <div className="Ga2"data-aos="fade-up" data-aos-duration="500"
             data-aos-easing="linear"   >Explore our creative visual storytelling through stunning imagery and design.</div>


        <div className="Ga3">
          <div className="Ga4">
            <div className="Ga5"><img src="/photong.avif" alt=""className="" /></div>
            <div className="Ga6">
              <div className="Ga7">
                <div className='Kin'><img src="/pho1.avif" alt="" className=""/></div>
                 <div className='Kin'><img src="/pho3.avif" alt="" className=""/></div>
              </div>
              <div className="Ga8">
                 <div className='Kin'><img src="/pho2.avif" alt="" className=""/></div>
                 <div className='Kin'><img src="/pho1.avif" alt="" className=""/></div>
                 </div>
            </div>
          </div>
          
               <div className="Ga9" >
                <div className="Ga10"><img src="/pho.avif" alt="" className="" /></div>
                <div className="Ga10"><img src="/pho3.avif" alt=""  className=""/></div>
                <div className="Ga10" ><img src="/pho2.avif" alt="" className=""/></div>
                <div className="Ga10"><img src="/pho1.avif" alt="" className="" /></div>
                <div className="Ga10"><img src="/pho.avif" alt="" className="" /></div>
          
               </div>
        </div>

      <div className="Ga22">
          <div className="Ga21" >
                <div className="Ga20"><img src="/pho.avif" alt="" className="" /></div>
                <div className="Ga20"><img src="/pho3.avif" alt=""  className=""/></div>
                <div className="Ga20" ><img src="/pho2.avif" alt="" className=""/></div>
                <div className="Ga20"><img src="/pho1.avif" alt="" className="" /></div>
                <div className="Ga20"><img src="/pho.avif" alt="" className="" /></div>
                              <div className="Ga20"><img src="/pho3.avif" alt=""  className=""/></div>
                <div className="Ga20" ><img src="/pho2.avif" alt="" className=""/></div>
                <div className="Ga20" ><img src="/pho2.avif" alt="" className=""/></div>
                <div className="Ga20"><img src="/pho1.avif" alt="" className="" /></div>
                <div className="Ga20"><img src="/pho.avif" alt="" className="" /></div>
          
               </div>

      </div>
        {/* <Slide/> */}
      </div>
      </div>

   



      <div>
        <Testimony/>
      </div>


    </div>
  )
}

export default Home;