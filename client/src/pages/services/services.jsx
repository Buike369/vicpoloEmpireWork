import React from 'react'
import  './services.scss'
import  Testimony from "../../components/testimony/testimony"

const Services = () => {
  return (
    <div className='ServicesTag'>
{/* herosection */}

<div  className='ServicesTag1'>
    <img src="ooorgan.svg" alt="" className='AbbL'/>
    <div  className='ServicesTag2'>Unleashing Creativity in Media, Web, Data Analysis, Blockchain Technology and AI </div>
    <div  className='ServicesTag3'>At VicpoloEmpire, we creates stunning media, builds powerful websites, Blockchain project and develops smart AI solutions to help your business grow.</div>
</div>

<div  className='ServicesTag4'>
   <div  className='ServicesTag5'>Creative  Solutions </div>
   <div   className='ServicesTag6'>We provide any of this, web  development, AI services, Data Analysis, Graphic Design and Blockchain services to enhance your brand.</div>

   <div    className='ServicesTag7'>
    <div  className='ServT'>
        <div   className='ServicesTag8'><img src="photo23.avif" alt=""  className='' /></div>
            <div   className='serTT'>
                <div  className='ServicesTag9'>
                    <div  className='ServicesTag10'>Web Development</div>
                    <div  className='ServicesTag12'>Our web development services deliver responsive, user frienly websites that meets your business needs. We create stunning designs  with seamless functionality to enhance your online presence and drive growth.</div> 
                </div>
                 <div className='ServicesTag9'>
                    <div  className='ServicesTag10'>AI Services</div>
                    <div  className='ServicesTag12'>Our AI services offer smart solutions to automate tasks, improve decisions, and create personalized experiences, helping your business grow, work efficiently, and stay competitive.</div>
                </div>
                 <div  className='ServicesTag9'>
                    <div  className='ServicesTag10'>Data Analysis</div>
                    <div  className='ServicesTag12'>Our data analysis services help you uncover valuable insights, identify trends, and make informed decisions, empowering your business to optimize operations, boost performance, and drive growth.</div>
                </div>
                <div  className='ServicesTag9'>
                    <div  className='ServicesTag10'>Graphic designs</div>
                    <div  className='ServicesTag12'>Our graphic design services create eye-catching visuals that enhance your brand, communicate your message clearly, and engage your audience, helping your business stand out and grow.</div>
                </div>
                <div  className='ServicesTag9'>
                    <div  className='ServicesTag10'>Blockchain Technology</div>
                    <div  className='ServicesTag12'>Our blockchain technology services deliver secure, transparent solutions for digital transactions, smart contracts, and decentralized applications, empowering your business with trust, efficiency, and innovative digital transformation.</div>
                </div>
            </div>
    </div>
   </div>
</div>

<Testimony/>
    </div>
  )
}

export default Services