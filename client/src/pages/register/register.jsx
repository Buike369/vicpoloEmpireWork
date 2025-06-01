import React,{useState} from "react";
import "./register.css"
import axios from 'axios';
import withTitle from '../..//title';
import { Link,useNavigate} from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { faGooglePlusG}from '@fortawesome/free-brands-svg-icons'
import Navbar from "../../components/navbar/navbar"




const Register =()=>{

       const vicpo =  '/api';
     const navigate = useNavigate();
     const [inputs,setInputs]=useState({
        username:"",
        email:"",
        password:""
       
    })

     const [inputs50,setInputs50]=useState({
         showPassword: false,
    })

      const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
    }
const handleClickShowPassword = () => {
        setInputs50(prev=>({ ...prev, showPassword: !inputs50.showPassword }));
      };


      const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://vicpoloempire.com/api/auth/register`, inputs);
      alert('Registration successful! Please log in.');
      navigate('/login');
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  };
  
    return(
        <div className="BgColor" >
            <Navbar/>

            <div className="formDivPAd">
            
      
              <div style={{padding:"0px 7px"}} className="DivForming">
            <div className="Form_Div page">
                <form>
      {/* {message && <div style={{color:"#fff",position:"absolute",zIndex:"500",left:"50%",right:"50%",top:"-5%",padding:"5px 10px",backgroundColor:"#20263a",width:"100%",transform:"translate(-50%,-50%)",textAlign:"center",borderRadius:"5px"}}>{message}</div>} */}
                     <p className="New_Account textAdmin">Create an Account</p>
                     
                     {/* <div><label className="LabNa">Full Name</label></div> */}
                    <div> <input type="text" placeholder="Enter your full name"  className="Full_Name" name="username"/></div>
                    {/* <div><label   className="LabNa">Email</label></div> */}
                    <div> <input type="email" placeholder="Enter your email" className="Full_Name"  name="email"/></div>
                
                    {/* <div><label className="LabNa">Password</label></div> */}
                    {/* <div className="sers"> <input type="password" placeholder="" className="Full_Name "  name="password" /> */}
                     <div className="sers"> <input type={inputs50.showPassword ? "text":"password"} placeholder="Enter your password" className="Full_Name inpupage page10 page11" onChange ={handleChange} name="password" value={inputs.password} required/>


                  {inputs50.showPassword ?<FontAwesomeIcon icon={faEye} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/>:<FontAwesomeIcon icon={faEyeSlash} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/> }</div>
                 {/* <FontAwesomeIcon icon={faEye} className="PlusIcon plusIcon2 ser1" />:<FontAwesomeIcon icon={faEyeSlash} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/>  */}
                 {/* </div> */}
                 
            
                     <div  className="loginn" onClick={handleRegister}>Register</div>
                     <div className="Or_with2">
                         <div className="Or_With"></div>
                         <p className="adColor">Or register with</p>
                        
                         <div className="Or_With"></div>
                     </div>
                   
                     <div className="Googgle  page12"  ><FontAwesomeIcon icon={faGooglePlusG} className="gooleI" style={{width:"20%"}} /><div> Sign in with Google</div><div  style={{width:"8%"}}><FontAwesomeIcon  className="goole" /></div></div>
                     <p className="Already_Account adColor">Already have an account?</p>
                     <div className="LOGIN_HERE_NOW"><Link to="/login" className="p_LoGIn trems1" >SignIn Here</Link></div>

                </form>
            </div>
            </div>
<div className="IPLOm"></div>
            </div>


        </div>
    )
}

export default withTitle(Register,  "Register with VicpoloEmpire");
