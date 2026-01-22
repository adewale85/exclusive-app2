


import Monitor from "../../assets/Monitor.svg"
import Gamepad from "../../assets/Gamepad.svg"
import Footer from '../../Component/Layout/Footer'
import Navbar from '../../Component/Layout/Navbar'


function Cart() {
  return (
    <div>
        <Navbar/>
        <div className='Wrapper space-y-12'>

        <div className=' py-12 '>
            <span className='font-poppins font-normal text-sm leading-5'>Home /</span>
            <span className='font-poppins font-normal text-sm leading-5'> Cart</span>
        </div>
        <div className='space-y-22 '> 
        <div className='w-full h-72px bg-white shadow-sm flex items-center justify-between list-none p-4'>
        <li className='font-poppins font-normal text-[16px] leading-6'>Product</li>
        <li className='font-poppins font-normal text-[16px] leading-6'>Price</li>
        <li className='font-poppins font-normal text-[16px] leading-6'>Quantity</li>
        <li className='font-poppins font-normal text-[16px] leading-6'>Subtotal</li>
        </div>

        <div className='w-full h-102px bg-white shadow-sm flex items-center justify-between list-none p-4'>
        <div className='flex gap-3 items-center justify-center'>
            <img src={Monitor} alt="" className='w-[50px] h-[39px]' />
                    <li className='font-poppins font-normal text-[16px] leading-6'>LCD Monitor</li>
        </div>
        
        <li className='font-poppins font-normal text-[16px] leading-6'>$650</li>
        <div className='w-13 h-10 border items-center justify-center flex rounded-md'>
           <select name="" id="">
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="4">05</option>
           </select>
        </div>
        <li className='font-poppins font-normal text-[16px] leading-6'>$650</li>
        </div>

        <div className='w-full h-102px bg-white shadow-sm flex items-center justify-between list-none p-4'>
        <div className='flex gap-3 items-center justify-center'>
            <img src={Gamepad} alt="" className='w-[50px] h-[39px]' />
                    <li className='font-poppins font-normal text-[16px] leading-6'>LCD Monitor</li>
        </div>
        
        <li className='font-poppins font-normal text-[16px] leading-6'>$650</li>
        <div className='w-13 h-10 border items-center justify-center flex rounded-md'>
           <select name="" id="">
            
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="4">05</option>
           </select>
        </div>
        <li className='font-poppins font-normal text-[16px] leading-6'>$1100</li>
        </div>
       </div>

        <div className='flex items-center justify-between py-12'>
            <button className='w-[218px] h-14 rounded-sm border font-poppins font-medium text-[16px] leading-6'>
                Return To Shop
            </button>
            <button className='w-[218px] h-14 rounded-sm border font-poppins font-medium text-[16px] leading-6'>
                Update Cart
            </button>
        </div>


        <div className='flex justify-between mb-24'>
        <div className='flex gap-5'>
            <div className='w-[300px] h-14 border rounded-md flex items-center p-4'>
                <input type="text" placeholder='Coupon Code' />
            </div>
            <button className='w-[218px] h-14 rounded-sm text-white font-poppins font-medium text-[16px] leading-6 bg-[#Db4444]'>
                Apply Coupon
            </button>
        </div>

        <div className='w-[470px] h-[399px] border-[1.5px] rounded-md p-8 space-y-8'>
        <p className='font-poppins font-medium text-[20px] leading-7'>Cart Total</p>
        <div className='flex items-center justify-between border-b pb-5'>
            <p className='font-poppins font-normal text-[16px] leading-6'>Subtotal:</p>
            <p className='font-poppins font-normal text-[16px] leading-6'>$1750</p>
        </div>
        <div className='flex items-center justify-between border-b pb-5'>
            <p className='font-poppins font-normal text-[16px] leading-6'>Shipping:</p>
            <p className='font-poppins font-normal text-[16px] leading-6'>Free</p>
        </div>
        <div className='flex items-center justify-between  pb-5'>
            <p className='font-poppins font-normal text-[16px] leading-6'>Total:</p>
            <p className='font-poppins font-normal text-[16px] leading-6'>$1750</p>
        </div>
        <ul className='flex items-center justify-center'>
            <li><a href="/checkout"><button className=' w-[260px] h-14 rounded-sm text-white font-poppins font-medium text-[16px] leading-6 bg-[#Db4444] '>
                Procees to checkout
        </button></a></li>
        </ul>
        </div>
        </div>

        </div>
        <Footer/>
    </div>

  )
}

export default Cart