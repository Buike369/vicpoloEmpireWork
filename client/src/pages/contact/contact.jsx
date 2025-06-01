
import React, {useState,useRef} from 'react'

import "./contact.css"
import axios from "axios"
import withTitle from '../..//title';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn,faTwitter,faDiscord,faGithub,faTelegram,faYoutube, faFacebookF} from "@fortawesome/free-brands-svg-icons"
import {faLocationDot,faHouse,faMessage,faPhone,faAddressBook,faEnvelope} from "@fortawesome/free-solid-svg-icons"
import validator from 'validator';
import Loadings from "../../components/loading/loading"
// import { useLocation } from 'react-router-dom';

const Contact = () => {
  const [error,setError]=useState("")
   const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
     const [message,setMessage]=useState("")
  const [inputs1,setInputs1] = useState({
    fullName:"",
    email:"",
    phone:"",
    subject:"",
    message:""
  })

const inputRef = useRef();
   const changeHandle =(e)=>{
    if(inputRef.current){
   
    }

    setInputs1(prev=>({...prev,[e.target.name]:e.target.value}))
    console.log(inputs1)
  }


    const postInfo = async (e)=>{
e.preventDefault()
 setLoading(true);
    setSuccessMessage('');
    setError("")

    if((inputs1.fullName.length === 0) || (inputs1.email.length === 0) || (inputs1.phone.length === 0) || (inputs1.subject.length === 0) || (inputs1.message.length === 0) ){
        setLoading(false)
      setError("field must not be empty")
       setTimeout(()=>{
           setError("")
        },3000)
    }else if(validator.isEmail(inputs1.email) === false){
         setLoading(false)
setError("invalid Email")
 setTimeout(()=>{
           setError("")
        },3000)
    }else if (validator.isMobilePhone(inputs1.phone,'en-NG',{strictMode:false}) === false){
         setLoading(false)
 setError("invalid phone number")
  setTimeout(()=>{
           setError("")
        },3000)
    }else{
 try{
    // const response = await axios.post("http://localhost:8080/api/post/form",inputs1);
    const response = await axios.post("https://vicpoloempire/api/form/contact-us",inputs1);
        // axios.post("http://localhost:8080/api/post/form",inputs).then((response)=>{

                  if (response.status === 201) {
        setSuccessMessage('Form submitted successfully!');

         setTimeout(()=>{
           setInputs1({
            fullName:"",
    email:"",
    phone:"",
    subject:"",
    message:""
           })
          setSuccessMessage("")
        },3000)
      } else {
        throw new Error('Submission failed!');
      }
        // setMessage("Successful Registration")
       
      
    }catch(error){
    setError(error.response ? error.response.data : 'Submission failed!');
     setTimeout(()=>{
       
          setError("")
        },3000)
      }finally {
      setLoading(false);
    }
    } 
  }




    
 const inputs = [{label:"Full Name",type:"text", name:"fullName",holder:"Full Name",value:inputs1.fullName,icon:faAddressBook},{label:"Subject",type:"text",name:"subject",holder:"Subject",value:inputs1.subject,icon:faHouse},{label:"Email",type:"email",name:"email",holder:"Email",value:inputs1.email,icon:faEnvelope},{label:"Phone",type:"number",name:"phone",holder:"Phone",value:inputs1.phone,icon:faPhone}]

  const PhoneNum ="+2349071071018"
 const socialLink = [{icon:faTwitter,link:"https://x.com/ChukwubuikeK?t=Ksk86TowzZrQ7X_21swBIg&s=09"},{icon:faFacebookF,link:"https://www.facebook.com/profile.php?id=100070000591981&mibextid=ZbWKwL"},{icon:faTelegram,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{icon:faYoutube,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"}]
  return (
    <div>
    <div style={{position:"relative",zIndex:"4"}}>
        

       <div className='contcat'>
       

        {/* end section */}

        <div className='coverDC'>
            <div className='connectWithUs'><span  className='connectWithUs1'>Contact</span>  us</div>
              {/* <div className='XML'>
              <svg xmlns="http://www.w3.org/2000/svg" className="heroImage" version="1.1" viewBox="0 0 700 700" style={{overflow: "hidden", display: "block"}} width="700" height="700"><defs><linearGradient id="two-3" x1="350" y1="-350" x2="350" y2="350" spreadMethod="pad" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#121728" stop-opacity="1"/><stop offset="100%" stop-color="#2e756d" stop-opacity="1"/></linearGradient></defs><g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity="1"><path transform="matrix(1 0 0 1 350 350)" id="two-57" d="M 236.486568 69.438721 C 244.003875 93.080142 227.010485 118.916402 223.175086 143.425919 C 218.083504 175.962876 232.826653 218.6136 209.996326 242.348679 C 188.626047 264.565849 148.244407 263.971097 117.948962 258.272201 C 84.422999 251.96561 62.171744 214.494461 29.45183 204.841978 C 10.880874 199.363484 -10.597393 197.658671 -29.19407 203.04921 C -64.379284 213.248198 -84.816107 270.022185 -121.138284 265.255841 C -148.2916 261.692673 -153.496134 218.832551 -175.547561 202.592684 C -199.631439 184.856009 -250.888363 195.067049 -258.53607 166.151042 C -270.683181 120.22277 -158.220283 95.959508 -172.57301 50.672007 C -188.77648 -0.455185 -318.132177 52.89566 -326.99735 0 C -333.243906 -37.271202 -271.422004 -56.684527 -235.773913 -69.229468 C -197.539368 -82.684609 -137.769137 -40.5371 -112.993452 -72.616483 C -96.65362 -93.773183 -130.764695 -124.800348 -131.298842 -151.526941 C -131.943163 -183.766238 -128.58128 -219.267304 -113.038571 -247.519943 C -98.160441 -274.564546 -75.649637 -311.270949 -44.78335 -311.47504 C -9.412314 -311.708918 13.16855 -267.521258 34.395621 -239.226799 C 51.825904 -215.993238 50.899448 -178.860705 73.165742 -160.21063 C 87.00259 -148.620994 107.710632 -146.090811 125.732933 -145.103541 C 171.416243 -142.600987 239.815579 -208.420832 262.366976 -168.613018 C 288.652886 -122.213026 170.693517 -97.633531 156.989157 -46.096176 C 153.007979 -31.124345 158.559972 -13.653582 165.880166 -0.000001 C 181.321825 28.801691 226.58381 38.295219 236.486568 69.438721 Z " fill="#2388804f" stroke="undefined" stroke-width="1" stroke-opacity="1" fill-opacity="1" visibility="visible" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"/></g></svg>
            </div> */}
            <div></div>
            <div className='contactFormD'>
                <div className='ddV'>
                    <div className=' ddV23'>
                    
                    <div>
                        <form className="fdn"> 
                            <div className='lLget'>Get In Touch</div>
                            <p className='getLL'> Fill out the form,and we will contact you</p>
                            {inputs.map((app,id)=>(
                                <div key={id}>
                            {/* <div className='LabelCon'>{app.label}</div> */}
                            <div className='letGo'>
                                <FontAwesomeIcon icon={app.icon}  className=" " style={{fontSize:"20px",color:"#fff",marginRight:"8px"}}  />
                                <input type={app.type} className='inputsConnect' name={app.name} onChange={changeHandle} placeholder={app.holder} value={app.value} ref={inputRef}/>
                            </div>
                            </div>
                            ))}

                         
                            <div>
                                <div className='messA' style={{paddingLeft:"10px"}}> <FontAwesomeIcon icon={faMessage}  className=" " style={{fontSize:"20px",color:"#fff",marginRight:"8px"}}  /> Your Message *</div>
                                <div>
                                    <textarea className='textF' name="message" onChange={changeHandle} value={inputs1.message} placeholder=''>
                                    </textarea>
                                </div>
                            </div>
                            <div><button className='SumbitConnect' onClick={postInfo} disabled={loading}> {loading ? 'Submitting...' : 'Submit'}</button></div>
                             
                        </form>
                    </div>
                    </div>
                </div>
                <div className=' ddV ddV5'>
                    {/* <div>
                        goggle location map
                    </div> */}

                    <div className='UUH'>
                        <div className='ifUs'>We’d love to hear from you! Reach out for web development, AI services, Graphic design, Data Analysis and Blockchain technologies inquiries.</div>
                    <div>
                        <div className='graceDay'>Working Days! </div>
                        <div className='wedDis'>Monday -Saturday 7:00am- 5PM. </div>
                    </div>
                    <div>
                        <div className='graceDay'>Location</div>
                        <div className='wedDis'> <FontAwesomeIcon icon={ faLocationDot}  className='noLike'/> Oyigbo Express Junction, Rivers State. </div>
                    </div>
                    <div>
                        <div className='graceDay'>
                            Contact Information
                        </div>
                        <div className='wedDis'>Office Phone:  <a href={`tel:${PhoneNum}`} className="tWE" style={{fontWeight:"600"}}>+234 907 1071 018</a></div>
                        <div className='wedDis'>Email: <a href="mailto:support@vicpoloempire.com"  className="LKIP" >support@vicpoloempire.com</a></div>
                        <div className='deed'>Mailing Address:</div>
                        <div className='wedDis'>P.O. Box 1639</div>
                        <div className='wedDis'>Boring, OR 97009</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

       <div className='itin'></div>
    </div>
     <div>
          {loading && <div className="loade loader"><Loadings/></div>}
      {successMessage && <div className="loade success">{successMessage}</div>}
      {error && <div className="loade error">{error}</div>}
     </div>
    </div>
  )
}

export default withTitle(Contact, 'Contact Us at - VicpoloEmpire');