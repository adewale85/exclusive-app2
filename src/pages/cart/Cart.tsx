import Monitor from "../../assets/Monitor.svg"
import Gamepad from "../../assets/Gamepad.svg"
import { Link } from "react-router-dom"

function Cart() {
  return (
    <div className='Wrapper lg:px-0 px-4 py-10'>
      
     
      <div className='hidden lg:flex flex-row justify-between bg-white shadow-sm rounded-md p-10 gap-4'>
        
        {/* Column 1: All Products */}
        <div className='flex flex-col gap-10 flex-2'>
          <div className='font-poppins font-medium text-[18px]  pb-4'>Product</div>
          <div className='flex gap-3 items-center h-12'>
            <img src={Monitor} alt="Monitor" className='w-12 h-10 object-contain' />
            <span className='font-poppins font-normal text-[16px]'>LCD Monitor</span>
          </div>
          <div className='flex gap-3 items-center h-12'>
            <img src={Gamepad} alt="Gamepad" className='w-12 h-10 object-contain' />
            <span className='font-poppins font-normal text-[16px]'>Havit Gamepad</span>
          </div>
        </div>

        {/* Column 2: All Prices */}
        <div className='flex flex-col gap-10 flex-1 text-center'>
          <div className='font-poppins font-medium text-[18px]  pb-4'>Price</div>
          <div className='h-12 flex items-center justify-center'>$650</div>
          <div className='h-12 flex items-center justify-center'>$650</div>
        </div>

        {/* Column 3: All Quantities */}
        <div className='flex flex-col gap-10 flex-1 items-center'>
          <div className='font-poppins font-medium text-[18px]  pb-4 w-full text-center'>Quantity</div>
          <div className='h-12 flex items-center'>
            <select className='w-16 h-11 border border-gray-300 rounded-md text-center'><option>01</option></select>
          </div>
          <div className='h-12 flex items-center'>
            <select className='w-16 h-11 border border-gray-300 rounded-md text-center'><option>01</option></select>
          </div>
        </div>

        {/* Column 4: All Subtotals */}
        <div className='flex flex-col gap-10 flex-1 text-right'>
          <div className='font-poppins font-medium text-[18px]  pb-4'>Subtotal</div>
          <div className='h-12 flex items-center justify-end'>$650</div>
          <div className='h-12 flex items-center justify-end'>$1100</div>
        </div>
      </div>

      
      <div className='lg:hidden flex flex-col gap-6'>
        
        {/* ITEM 1 BLOCK */}
        <div className='bg-white p-6 shadow-sm rounded-md space-y-4 border border-gray-100'>
          <div className='flex justify-between items-center  pb-2'>
            <span className='text-black'>Product</span>
            <div className='flex items-center gap-2'>
               <img src={Monitor} alt="Monitor" className='w-8 h-8 object-contain' />
               <span>LCD Monitor</span>
            </div>
          </div>
          <div className='flex justify-between items-center  pb-2'>
            <span className='text-black'>Price</span>
            <span>$650</span>
          </div>
          <div className='flex justify-between items-center  pb-2'>
            <span className='text-black'>Quantity</span>
            <select className='border rounded p-1'><option>01</option></select>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-black'>Subtotal</span>
            <span className='font-medium'>$650</span>
          </div>
        </div>

        {/* ITEM 2 BLOCK */}
        <div className='bg-white p-6 shadow-sm rounded-md space-y-4 border border-gray-100'>
          <div className='flex justify-between items-center  pb-2'>
            <span className='text-black'>Product</span>
            <div className='flex items-center gap-2'>
               <img src={Gamepad} alt="Gamepad" className='w-8 h-8 object-contain' />
               <span>Havit Gamepad</span>
            </div>
          </div>
          <div className='flex justify-between items-center  pb-2'>
            <span className='text-black'>Price</span>
            <span>$650</span>
          </div>
          <div className='flex justify-between items-center  pb-2'>
            <span className='text-black'>Quantity</span>
            <select className='border rounded p-1'><option>01</option></select>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-black'>Subtotal</span>
            <span className='font-medium'>$1100</span>
          </div>
        </div>

      </div>

      {/* FOOTER SECTIONS (Kept original buttons and coupon layout) */}
      <div className='flex flex-col md:flex-row items-center justify-between py-12 gap-4'>
        <button className='md:w-[218px] w-full h-14 rounded-sm border font-medium'>Return To Shop</button>
        <button className='md:w-[218px] w-full h-14 rounded-sm border font-medium'>Update Cart</button>
      </div>

      <div className='flex flex-col lg:flex-row justify-between gap-10 mb-24'>
        <div className='flex flex-col md:flex-row gap-4'>
          <input type="text" placeholder='Coupon Code' className='lg:w-[300px] w-full h-14 border rounded-md p-4 outline-none' />
          <button className='lg:w-[218px] w-full h-14 rounded-sm text-white bg-[#Db4444]'>Apply Coupon</button>
        </div>

        <div className='lg:w-[470px] w-full border-[1.5px] rounded-md p-8 space-y-6'>
          <p className='text-[20px] font-medium'>Cart Total</p>
          <div className='flex justify-between border-b pb-4'><span>Subtotal:</span><span>$1750</span></div>
          <div className='flex justify-between border-b pb-4'><span>Shipping:</span><span>Free</span></div>
          <div className='flex justify-between font-bold text-lg'><span>Total:</span><span>$1750</span></div>
          <Link to="/checkout">
          <button className='w-full h-14 rounded-sm text-white bg-[#Db4444] font-medium'>Proceed to checkout</button> 
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Cart