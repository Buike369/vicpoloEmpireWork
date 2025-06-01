import React,{useState,useContext} from "react";
import "../register/register.css";
import withTitle from '../..//title';
import axios from 'axios';
import "../login/login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { Link,useNavigate} from "react-router-dom";
import Navbar from "../../components/navbar/navbar"


const ForgetPassword =()=>{

     const navigate = useNavigate();
     const vicpo =  '/api';

     const [inputs,setInputs]=useState({
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

       const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${vicpo}/auth/login`, inputs);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

    return(
        <div className="BgColor" >
                <Navbar/>
          
          
            <div className="Form_Divbb">
              
           <div className="Form_Div renttt pK">
               <form>
                  
                  <div className="welcome4 textAdmin">Welcome to VicpoloEmpire</div>
                                       <div><label className="LabNa">Enter  Your Email</label></div>
                  <div> <input type="email" placeholder="" className="Full_Name " name="email" /></div>
                                     
             
                  <div className="loginn" onClick={handleLogin} >Send</div>
                  {/* {err && <p className="errorP">{err}</p>} */}
                
                
                 
                    
              
               </form>
           </div>
         
         
           </div>
           
        
             
        </div>
    )
}

export default withTitle(ForgetPassword, "forget password");