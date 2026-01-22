import React, { useState } from 'react';
import SlideImage from "../../../assets/Side Image.svg";



function Login() {
  const [showDropNav, setShowDropNav] = useState(false);

  return (
    <div className='Wrapper h-[781px] flex items-center gap-20 relative'>

     
      <div>
        <img src={SlideImage} alt="Slide" />
      </div>

      
      <div className='space-y-8'>
        <h1 className='font-inter font-medium text-[36px] leading-7.5 tracking-[4%]'>
          Log in to Exclusive
        </h1>
        <p className='font-poppins font-normal text-base leading-6'>
          Enter your details below
        </p>

        <div className='space-y-8'>
          
          <div className='text-black flex items-center justify-center'>
            <input 
              type="email" 
              name='mail' 
              placeholder='Email or Phone Number' 
              className='w-[370px] p-2 border-0 border-b focus:outline-none border-b-black opacity-50'
            />
          </div>

         
          <div className='text-black flex items-center justify-center'>
            <input 
              type="password" 
              name='password' 
              placeholder='Password' 
              className='w-[370px] p-2 border-0 border-b focus:outline-none border-b-black opacity-50'
            />
          </div>

         
          <div className='flex items-center justify-between'>
            <button 
              onClick={() => setShowDropNav(true)}
              className="w-[143px] h-14 bg-[#d64040] text-white font-poppins font-medium text-[16px] leading-6 rounded-sm"
            >
              Login
            </button>

            <p className='font-poppins font-normal text-base leading-6 text-[#DB4444]'>
              Forget Password?
            </p>
          </div>
          {showDropNav && (
            <div className='relative z-50 mt-4'>
              {/* <DropNav/> */}
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
