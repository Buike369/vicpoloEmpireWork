import React from 'react'
import  './services.scss'
import  Testimony from "../../components/testimony/testimony"

const Services = () => {
  return (
    <div className='ServicesTag'>
{/* herosection */}

<div  className='ServicesTag1'>
    <img src="ooorgan.svg" alt="" className='AbbL'/>
    <div  className='ServicesTag2'>Unleashing Creativity in Media, Web, and AI </div>
    <div  className='ServicesTag3'>At VicoploEmpire, we creates stunning media, builds powerful websites, and develops smart AI solutions to help your business grow.</div>
</div>

<div  className='ServicesTag4'>
   <div  className='ServicesTag5'>Creative  Solutions </div>
   <div   className='ServicesTag6'>We provide innovative video production, branding, web development, AI  services and digital marketing services to elevate your brand.</div>

   <div    className='ServicesTag7'>
    <div  className='ServT'>
        <div   className='ServicesTag8'><img src="photo23.avif" alt=""  className='' /></div>
            <div   className='serTT'>
                <div  className='ServicesTag9'>
                    <div  className='ServicesTag10'>Digital Marketing Expertise</div>
                    <div  className='ServicesTag12'>Comprehensive digital marketing solutions to enhance your online presence and drive engagement.</div>
                </div>
                 <div className='ServicesTag9'>
                    <div  className='ServicesTag10'>Video Production Services</div>
                    <div  className='ServicesTag12'>High-quality video production that captures your brand's essence and engages your audience effectively.</div>
                </div>
                 <div  className='ServicesTag9'>
                    <div  className='ServicesTag10'>Branding and Design</div>
                    <div  className='ServicesTag12'>Crafting unique branding strategies and designs that resonate with your target audience.</div>
                </div>
                <div  className='ServicesTag9'>
                    <div  className='ServicesTag10'>Web  Development</div>
                    <div  className='ServicesTag12'>we specialize in creating custom, responsive, and user-friendly websites tailored to your business needs.</div>
                </div>
                <div  className='ServicesTag9'>
                    <div  className='ServicesTag10'>AI   Services</div>
                    <div  className='ServicesTag12'>we offer cutting-edge Artificial Intelligence (AI) solutions designed to enhance business efficiency, automate processes, and unlock new opportunities.</div>
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