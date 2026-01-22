
import Navbar from '../Component/Layout/Navbar'
import phoneIcon from "../assets/icons-phone.svg"
import MailIcon from "../assets/icons-mail.svg"
import Footer from '../Component/Layout/Footer'

import { Link } from 'react-router-dom'

function Contact() {
   
    
  return (
    <div>
        <Navbar/>
        <section className='Wrapper'>
        <div className='Wrapper flex gap-3'>
            <p className='font-poppins font-normal text-sm leading-5 text-[#818181]'>Home / </p>
            <p className='font-poppins font-normal text-sm leading-5'>About </p>
        </div>

    <div className='flex gap-8 items-center justify-center'>
       <div className=' w-full h-[457px] bg-white shadow flex items-center justify-center my-12'>
       <div>
         <div className='border-b py-6'>
        <div className='flex item gap-6 items-center py-4'>
            <img src={phoneIcon} alt="" />
            <p className='font-poppins text-[16px] leading-6 font-medium'>Call To Us</p>
        </div>
            <p className='w-[262px]'>We are available 24/7, 7 days a week. Phone: +8801611112222</p>

        </div>
            <div className='py-6 flex item gap-6 items-center'>
                <img src={MailIcon } alt="" />
                 <p className='font-poppins text-[16px] leading-6 font-medium'>Write To US</p> 
            </div>
            <div className='w-[250px] h-[116px]'>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
            </div>
        </div>
        </div>

       
        <div className='w-[998px] h-[457px]   p-12 bg-white shadow-md space-y-12'>
        
        <div className='flex gap-5 item-center justify-center'>
            <div className='w-[235px] h-[50px] bg-[#F5F5f5] flex items-center p-4'>
                <input type="text" placeholder='Your Name *' className='w-full h-[30px]'/>
            </div>
            <div className='w-[235px] h-[50px] bg-[#F5F5f5] flex items-center p-4'>
                <input type="text" placeholder='Your Email *' className='w-full h-[30px]'/>
            </div>
            <div className='w-[235px] h-[50px] bg-[#F5F5f5] flex items-center p-4'>
                <input type="text" placeholder='Your Phone *' className='w-full h-[30px]'/>
            </div>
        </div>

        <div className='h-[207px] bg-[#f5F5F5] '>
           <input type="text" placeholder='Your Message' className='p-4 w-[637px] h-[207px]'/> 
        </div>

           <div className='flex items-end justify-end'>
             <Link to="/Error"> <button className='w-[215px] h-11 bg-red-500 text-white font-medium font-poppins text-[16px] leading-6'
              >
                Send Message
              </button></Link>
           </div>
           
        </div>
        </div>

        </section>
        <Footer/>
    </div>
  )
}

export default Contact