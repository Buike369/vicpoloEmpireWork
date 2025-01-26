import React,{useState} from "react";
import "./register.css"
import withTitle from '../..//title';
import { Link,useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { faGooglePlusG}from '@fortawesome/free-brands-svg-icons'
import Navbar from "../../components/navbar/navbar"


// KEY=AIzaSyCRKXMIcUH0WQRq1znBz7EF9Oue5TjXJyM
const Register =()=>{

    const googleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  
    return(
        <div className="BgColor" >
            {/* <Navbar/> */}

            <div className="formDivPAd">
            
      
              <div style={{padding:"0px 7px"}} className="DivForming">
            <div className="Form_Div page">
                <form>
      {/* {message && <div style={{color:"#fff",position:"absolute",zIndex:"500",left:"50%",right:"50%",top:"-5%",padding:"5px 10px",backgroundColor:"#20263a",width:"100%",transform:"translate(-50%,-50%)",textAlign:"center",borderRadius:"5px"}}>{message}</div>} */}
                     <p className="New_Account textAdmin">Create an Account</p>
                     
                     <div><label className="LabNa">Full Name</label></div>
                    <div> <input type="text" placeholder=""  className="Full_Name" name="username"/></div>
                    <div><label   className="LabNa">Email</label></div>
                    <div> <input type="email" placeholder="" className="Full_Name"  name="email"/></div>
                
                    <div><label className="LabNa">Password</label></div>
                    <div className="sers"> <input type="password" placeholder="" className="Full_Name "  name="password" />
                 {/* <FontAwesomeIcon icon={faEye} className="PlusIcon plusIcon2 ser1" />:<FontAwesomeIcon icon={faEyeSlash} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/>  */}
                 </div>
                 
                  


                    
                    <div className="Checkbox_div"> <input type="checkbox" className="Bym" name="term" /><p className="Over_18 adColor">By checking this box you agree to all our Terms & Conditions.Click to  <a href="/terms_and_condition" className="trems1">here</a> to read.</p></div>

                     <div  className="loginn" >Register</div>
                     <div className="Or_with2">
                         <div className="Or_With"></div>
                         <p className="adColor">Or register with</p>
                        
                         <div className="Or_With"></div>
                     </div>
                   
                     <div className="Googgle  page12"  onClick={googleLogin}><FontAwesomeIcon icon={faGooglePlusG} className="gooleI" style={{width:"20%"}} /><div> Sign in with Google</div><div  style={{width:"8%"}}><FontAwesomeIcon  className="goole" /></div></div>
                     <p className="Already_Account adColor">Already have an account?</p>
                     <div className="LOGIN_HERE_NOW"><Link to="/login" className="p_LoGIn trems1">Login Here</Link></div>

                </form>
            </div>
            </div>
<div className="IPLOm"></div>
            </div>


        </div>
    )
}

export default withTitle(Register,  "Register with VicopoloEmpire");
