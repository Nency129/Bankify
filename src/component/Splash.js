import React from "react";
import logo from "../assets/logo.png";
import { useNavigate} from "react-router-dom";

function Splash() {
    const navigate=useNavigate();
    
    function handletime(){
        navigate('/home');
    }
    const myTimeout = setTimeout(handletime, 1000);
  return (
    <div className='flex justify-center items-center w-screen'>
        <img src={logo} alt='logo'/>
    </div>
  )
}

export default Splash;
