import React from 'react'
import "./footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXTwitter,faInstagram,faTiktok,faGithub,faTelegram,faYoutube, faFacebook} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
  <div className='Like'>
    < div className='FooterDiv'>

      < div className='FooterDiv1'>
        < div className='FooterDiv8 sec'>
          < div className='FooterDiv3'>News  letter</ div >
          < div className='FooterDiv4'>Stay upto date to  get the latest  news from us.</ div >
          {/* < div className='FooterDivf'>Enter your email address</ div > */}
          <div className="FooterDiv5">
            < div className='FooterDiv6'><input type="email" placeholder='Enter your email address'/></ div >
            < div className='FooterDiv7'><button>Subscribe</button></ div >
          </div>
        </ div >
         < div className='FooterDiv8'>
          < div className='FooterDiv3'>Design</ div >
          < div className='FooterDiv9'><a  href="tel:+2348167029609" style={{color:"#585757"}}>+234 907 1071 018</a></ div >
          < div className='FooterDiv10'><a  href="mailto:support@vicpoloempire.com" style={{color:"#585757"}}>support@vicpoloempire.com</a></ div >
         </ div >
          < div className='FooterDiv8'>
            < div className='FooterDiv3'>Services</ div >
            < div className='FooterDiv13'>We craft visual solutions that engage audiences effectively.</ div >
            < div className='FooterDiv14'>
              <ul>
                <li><a href=""><FontAwesomeIcon icon={faFacebook}  className=" " style={{fontSize:"20px",color:"#000",marginRight:"8px"}}  /></a></li>
                   <li><a href=""><FontAwesomeIcon icon={faXTwitter}  className=" " style={{fontSize:"20px",color:"#000",marginRight:"8px"}}  /></a></li>
                      <li><a href=""><FontAwesomeIcon icon={faInstagram}  className=" " style={{fontSize:"20px",color:"#000",marginRight:"8px"}}  /></a></li>
                         <li><a href=""><FontAwesomeIcon icon={faTiktok}  className=" " style={{fontSize:"20px",color:"#000",marginRight:"8px"}}  /></a></li>
              </ul>
            </ div >
          </ div >
      </ div >
    </ div >
      < div className='FooterDiv15'>© 2025  VicpoloEmpire. All rights reserved.</ div >
    </div>
  )
}

export default Footer;