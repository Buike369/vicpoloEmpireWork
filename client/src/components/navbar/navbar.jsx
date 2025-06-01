
import React,{useState,useEffect} from 'react'
import {Link}from "react-router"
import "./navbar.css"

import "./mobileHeader.css"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faArrowRight,faCircleChevronDown,faCircleChevronUp,faXmark,faSearch} from '@fortawesome/free-solid-svg-icons'
import {faXTwitter,faInstagram,faTiktok,faTelegram,faYoutube, faFacebookF} from "@fortawesome/free-brands-svg-icons"


const Header = () => {

  
   const socialLink = [{icon:faXTwitter,link:"https://x.com/ChukwubuikeK?t=Ksk86TowzZrQ7X_21swBIg&s=09"},{icon:faFacebookF,link:"https://www.facebook.com/profile.php?id=100070000591981&mibextid=ZbWKwL"},{icon:faTiktok,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{icon:faInstagram,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"}]


  const [isChecked,setIsChecked] = useState(false)
    const [isChecked2,setIsChecked2] = useState(false)
  const [dropdown,setDropdown] = useState(false)
  const tr = window.location.pathname;
  const [addRight, setAddRight] = useState("")
  const [addRight1, setAddRight1] = useState("")

   const [feed,setFeed] = useState("header")

      const [feedBack1,setFeedBack1]=useState("")
   const navbarItem = [{link:"/courses",text:"Explore",name:"navbar1_link explore"},{link:"/ebook",text:"eBook",name:"navbar1_link"},{link:"/blog",text:"Blog",name:"navbar1_link"},{link:"/project",text:"projects",name:"navbar1_link"},{ link:"/",text:"pricing",name:"navbar1_link"}]

    window.onscroll=()=>{
      goMan()
      }
   
     

      const goMan =()=>{
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            setFeed('subCap')
            // setFeedBack1('cap')
          }else{
            setFeed('header')
            // setFeedBack1(' ')
          }
      }

      const handleCheckboxChange = ()=>{
   setIsChecked(!isChecked)
   if(!isChecked){
   setAddRight('da1');
       document.body.classList.add('cac')
   }else{
      setAddRight('da');
       document.body.classList.remove('cac')
   }
      }
       const handleChange2 = ()=>{
   setIsChecked2(!isChecked2)
   if(!isChecked){
   setAddRight1('da2');
      //  document.body.classList.add('cac')
   }else{
      setAddRight1('dam');
      //  document.body.classList.remove('cac')
   }
      }

      

 
    
  return (

    <div className="" >
      {/* <Slide/> */}
    <div className={feed}>
      <div>
      <div className="Navbar relativeD">

            <div><a href="/" className="Brand">
            <div className='headerLogo'>
              {/* <div className='kingFD'></div> */}
              {/* <p className='AMAd'>Bkm </p> */}
            <img src="/Vempire.png" alt="" className=''  style={{width:"90px"}}/>
            {/* <p className='AMAd'>VicopoloEmpire </p> */}
            </div>
            </a></div>
            {(tr === "/register") || (tr === "/login") || (tr === "/forget_password") || (tr === "/update-password")  ? "":
            <div >
        <div className="nacBar">
           
          <ul className="NavbarUl" >
            <li><div  className="navbar1_link">Explore</div></li> 
            <li><div className='searchDiv'><input type="search" placeholder="search for courses" className="search"/></div></li>
           
             <li ><a href="" className="navbar1_link">Learn</a></li>
                          <li ><a href="/services" className="navbar1_link">Services</a></li>
              <li ><a href="/about" className="navbar1_link">About</a></li>
                            {/* <li ><a href="/" className="navbar1_link">Career</a></li>
               <li ><a href="/" className="navbar1_link">Blog</a></li> */}

        
          </ul>
          
        </div>
        </div>
        }

        {(tr === "/register") || (tr === "/login") || (tr === "/forget_password") || (tr === "/update-password") ? "" :
        <div >

          <div className="hamburgerMenu">
            <div className='reff'>
               <div><FontAwesomeIcon icon={faSearch}  className=" " style={{fontSize:"26px",color:"#0b4f45",marginLeft:"5px",marginTop:"3px"}}  /></div>
            <div><a href="/contact"><button className='RegRef'>Contact Us</button></a></div>
            {/* <div><button>O/F</button></div> */}
            <div><FontAwesomeIcon icon={faBars}  className=" " style={{fontSize:"26px",color:"#000",marginLeft:"5px",marginTop:"3px"}} onClick={handleCheckboxChange} /></div>
            </div>
    {/* <input id="menuToggle" type="checkbox"  checked={isChecked}  onChange={handleCheckboxChange}/>
    <label className="menuBtn" for="menuToggle">
      <span></span>
    </label> */}
    {/* {isChecked ?  */}
    
     <div className={`menuBox ${addRight}`} >
      <div className='baclo' onClick={handleCheckboxChange}></div>
    <ul className="menuBox24">
      <li><div className='gFerL'><FontAwesomeIcon icon={faXmark}  className=" " style={{fontSize:"26px",color:"#000"}} onClick={handleCheckboxChange} /></div></li>
      <li><div className='reff aaFF'><a href="/login" onClick={handleCheckboxChange}><button className='RegRef' style={{background:"#2e756d"}}>Log In</button></a><a href="/register"><button className='RegRef'>Register</button></a></div></li>
                  <li><a className="menuItem" href="/" >Web Development</a></li>
                  <li><a className="menuItem" href="/" >Mobile Development</a></li>
                                    <li><a className="menuItem" href="/" >AI Services</a></li>
                                                      <li><a className="menuItem" href="/" >Graphic Design</a></li>
                                                                        <li><a className="menuItem" href="/" >Digital Marketing</a></li>

            <li><a className="menuItem" href="/about" >About Us</a></li>
            <li><a className="menuItem" href="/services" >Services</a></li>
                        <li><a className="menuItem" href="/terms"  ><div >Terms</div></a></li>
       {/* <li><a className="menuItem met" onClick={()=>setDropdown(!dropdown)} >Services <span style={{color:"#fff",marginLeft:"5px",fontSize:"18px"}}>{dropdown ? <FontAwesomeIcon icon={faCircleChevronUp}  className=" " style={{fontSize:"20px",color:"#c5c5c5"}}  />: <FontAwesomeIcon icon={faCircleChevronDown}  className=" " style={{fontSize:"20px",color:"#c5c5c5"}}  />}</span></a>
       {dropdown ? 
          <div>
             <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />Video Production</a></div>
             <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />Branding Design</a></div>
              <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />Photography Services</a></div>
                           <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />Web  Development</a></div>
              <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />AI Services</a></div>
               

          </div>
          :""}
       </li> */}
              {/* <li><a className="menuItem" href="/#portfolio" >Portfolio</a></li> */}



     

       <li><button className='loginButton'><a className="menuItem34" href="/contact">Contact Us</a></button></li>
       <li> <div className="hotter kil" style={{marginBottom:"60px"}}>
                <div className="hot2">
                <ul  className="hot">
                {socialLink.map((app,id)=>(
                    <li key={id}> <div className='SoLin'><a href={app.link} target="_blank" rel="noreferrer" className="footerIconDivL um"><FontAwesomeIcon icon={app.icon}  className="iconHoverColor " style={{fontSize:"20px"}} /></a></div></li>
                  ))}
                </ul>
                </div>
            </div></li>
            <li><div style={{height:"20px",padding:"10px 15px"}}></div></li>
    </ul>
     
    </div>
     <div className={`menuBox44 ${addRight1}`}>
    {/* <ul className="menuBox242">
      <li><div className='gFerL'><FontAwesomeIcon icon={faXmark}  className=" " style={{fontSize:"26px",color:"#fff"}} onClick={handleCheckboxChange} /></div></li>
  
            <li><a className="menuItem" href="/about">About Us</a></li>
       <li><a className="menuItem met" onClick={()=>setDropdown(!dropdown)} >Services <FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#fff",marginRight:"8px"}}  /></a>
       {dropdown ? 
          <div>
             <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />Software</a></div>
             <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />Mobile App Development</a></div>
              <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />UI/UX design</a></div>
                <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />Graphic Design</a></div>
                <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />Front_End Development</a></div>
                <div className='mns41'><a href="" className='mns4'><FontAwesomeIcon icon={faArrowRight}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  />Backend Development</a></div>
          </div>
          :""}
       </li>
              <li><a className="menuItem" href="/career">Career</a></li>
              <li><div className="menuItem"  >Industries</div></li>
      <li><a className="menuItem" href="/blogs" style={{marginBottom:"10px"}}>Blog</a></li>

     

       <li><button className='loginButton'><a className="menuItem34" href="/contact">Contact Us</a></button></li>
       <li> <div className="hotter kil" style={{marginBottom:"60px"}}>
                <div className="hot">
                {socialLink.map((app,id)=>(
                <ul key={id} className="hot">
                    <li> <div className=''><a href={app.link} target="_blank" className="footerIconDivL um"><FontAwesomeIcon icon={app.icon}  className="iconHoverColor " style={{fontSize:"20px"}} /></a></div></li>
                </ul>
                ))}
                </div>
            </div></li>
            <li><div style={{height:"20px",padding:"10px 15px"}}></div></li>
    </ul> */}
     
    </div>
    {/* :""} */}
  </div>
           <ul className="NavbarUl">
           {/* <li><FontAwesomeIcon icon={faSearch}  className=""/> Search</li>  */}
           {/* <li><button className='NowB'>ON</button></li> */}
           <li><div style={{display:"flex",gap:"10px"}}><a href="/contact" className="navbar1_link loginButton wewem">Contact Us</a><a href="/login" className="navbar1_link loginButton" style={{backgroundColor:'#fff',color:"#000"}}>Login</a></div></li>
                     
           {/* <li><a href="/register" className="navbar1_link ">Join for free <FontAwesomeIcon icon={faArrowRight}  className=""/></a></li> */}
           </ul>
        </div>
        }
      </div>
      </div>


     
         

    </div>

    </div>
  )
}

export default Header