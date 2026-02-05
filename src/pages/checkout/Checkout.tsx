
import Monitor from "../../assets/Monitor.svg"
import Gamepad from "../../assets/Gamepad.svg"
import Bkash from "../../assets/Bkash.svg"
import Visa from "../../assets/Visa.svg"
import Mastercard from "../../assets/Mastercard.svg"
import Nagad from "../../assets/Nagad.svg"

import { useState } from 'react'
import OrderSucessModal from '../../Component/OrderSucessModal'
import Navbar from '../../Component/Layout/Navbar'

function Checkout() {
    const [sucessModal, setsucessModal] = useState(false)
    return (
        <main>
            <Navbar />
            <div className='Wrapper flex items-center justify-between'>


                <div className=' py-20'>
                    <div className='w-[455px] flex items-center justify-between list-none pb-6'>
                        <li className='font-poppins font-normal text-sm leading-5'>Account  / </li>
                        <li className='font-poppins font-normal text-sm leading-5'>My Account  / </li>
                        <li className='font-poppins font-normal text-sm leading-5'>Product  / </li>
                        <li className='font-poppins font-normal text-sm leading-5'>View Cart  / </li>
                        <li className='font-poppins font-normal text-sm leading-5'>CheckOut  / </li>
                    </div>

                    <div className='w-[455px] py-6'>
                        <h1 className='font-inter font-medium text-[36px] leading-8 tracking-[4%]'>Billing Details</h1>
                        <div className='py-6'>
                            <p className='py-2 font-poppins font-normal text-[16px] leading-6 text-[#4d4a4a] '>First Name*</p>
                            <input type="Name" name="" id="name" className='w-[455px] h-[50px] bg-[#F5F5f5]' />
                        </div>
                        <div className='pb-6'>
                            <p className='py-2 font-poppins font-normal text-[16px] leading-6 text-[#4d4a4a]'>Company Name</p>
                            <input type="Name" name="" id="name" className='w-[455px] h-[50px] bg-[#F5F5f5]' />
                        </div>
                        <div className='py-6'>
                            <p className='py-2 font-poppins font-normal text-[16px] leading-6 text-[#4d4a4a]'>Street Address*</p>
                            <input type="Name" name="" id="name" className='w-[455px] h-[50px] bg-[#F5F5f5]' />
                        </div>
                        <div className='py-6'>
                            <p className='py-2 font-poppins font-normal text-[16px] leading-6 text-[#4d4a4a]'>Apartment, floor, etc. (optional)</p>
                            <input type="Name" name="" id="name" className='w-[455px] h-[50px] bg-[#F5F5f5]' />
                        </div>
                        <div className='py-6'>
                            <p className='py-2 font-poppins font-normal text-[16px] leading-6 text-[#4d4a4a]'>Town/City*</p>
                            <input type="Name" name="" id="name" className='w-[455px] h-[50px] bg-[#F5F5f5]' />
                        </div>
                        <div className='py-6'>
                            <p className='py-2 font-poppins font-normal text-[16px] leading-6 text-[#4d4a4a]'>Phone Number*</p>
                            <input type="Name" name="" id="name" className='w-[455px] h-[50px] bg-[#F5F5f5]' />
                        </div>
                        <div className='py-6'>
                            <p className='py-2 font-poppins font-normal text-[16px] leading-6 text-[#4d4a4a]'>Email Address*</p>
                            <input type="Name" name="" id="name" className='w-[455px] h-[50px] bg-[#F5F5f5]' />
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type="checkbox" name="" id="" className='bg-red-500 size-4' />
                        <p className='font-poppins font-normal text-[16px] leading-6'>Save this information for faster check-out next time</p>
                    </div>

                </div>

                <div className='space-y-6'>
                    <div className='flex gap-5'>
                        <img src={Monitor} alt="" className='size-[54px]' />
                        <div className='w-[347px] flex items-center justify-between'>
                            <p className='font-poppins font-normal text-[16px] leading-6'>LCD Monitor</p>
                            <p className='font-poppins font-normal leading-6 text-[16px]'>$650</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <img src={Gamepad} alt="" className='size-[54px]' />
                        <div className='w-[347px] flex items-center justify-between'>
                            <p className='font-poppins font-normal text-[16px] leading-6'>LCD Monitor</p>
                            <p className='font-poppins font-normal leading-6 text-[16px]'>$1100</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between border-b pb-5'>
                        <p className='font-poppins font-normal text-[16px] leading-6'>Subtotal:</p>
                        <p className='font-poppins font-normal text-[16px] leading-6'>$1750</p>
                    </div>
                    <div className='flex items-center justify-between border-b pb-5'>
                        <p className='font-poppins font-normal text-[16px] leading-6'>Shipping:</p>
                        <p className='font-poppins font-normal text-[16px] leading-6'>Free</p>
                    </div>
                    <div className='flex items-center justify-between  pb-5'>
                        <p className='font-poppins font-normal text-[16px] leading-6'>Total</p>
                        <p className='font-poppins font-normal text-[16px] leading-6'>$1750</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-5'>
                            <input type="Checkbox" name="" id="" className=' size-5' />
                            <p className='font-poppins font-normal text-[16px] leading-6'>Bank</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={Bkash} alt="" className='w-[42px] h-7' />
                            <img src={Visa} alt="" className='w-[42px] h-7' />
                            <img src={Mastercard} alt="" className='w-[42px] h-7' />
                            <img src={Nagad} alt="" className='w-[42px] h-7' />

                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <input type="Checkbox" name="" id="" className=' size-5' />
                        <p className='font-poppins font-normal text-[16px] leading-6'>Cash on delivery</p>
                    </div>
                    <div className='flex gap-5'>
                        <div className='w-[300px] h-14 border rounded-md flex items-center p-4'>
                            <input type="text" placeholder='Coupon Code' className='w-full outline-none' />
                        </div>
                        <button className='w-[218px] h-14 rounded-sm text-white font-poppins font-medium text-[16px] leading-6 bg-[#Db4444]'>
                            Apply Coupon
                        </button>
                    </div>



                    <ul>
                        <li>
                            <button onClick={() => setsucessModal (true)}
                                className="w-[190px] h-14 rounded-sm text-white font-poppins font-medium text-[16px] leading-6 bg-[#DB4444]"
                            >
                                Place Order
                            </button>
                        </li>
                    </ul>





                </div>
            </div>
            <OrderSucessModal open={sucessModal} onChange={setsucessModal}/>
            
        </main>
    )
}

export default Checkout