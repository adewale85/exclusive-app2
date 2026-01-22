


import DropNav from '../Component/Layout/DropNav'
import Footer from '../Component/Layout/Footer'

function Account() {
  return (
    <div>
        <DropNav/>
        <div className='Wrapper py-12 space-y-4'>
           <div className='flex items-center justify-between pb-12'>
             <div className='flex gap-2 '>
            <p className='font-poppins font-normal text-sm leading-5'>Home /</p>
            <p className='font-poppins font-normal text-sm leading-5'>My Account</p>
            </div>
            <div>
                <p className='font-poppins font-normal text-sm leading-5 flex gap-2'>Welcome! 
                    <span className='font-poppins font-normal text-sm leading-5 text-[#Db4444]'>Md Rimel</span>
                </p>
            </div>
           </div>

        <div className='flex justify-between'>
            <div>
            <div className='font-poppins font-medium text-[16px]'>Manage My Account</div>
        <div className='space-y-2 pl-6 list-none '>
            <li className='font-poppins font-normal text-sm leading-6 text-[#Db4444]'>My Profile</li>
            <li className='font-poppins font-normal text-sm leading-6 text-[#4b4a4a] '>Address Book</li>
            <li className='font-poppins font-normal text-sm leading-6 text-[#4b4a4a] '>My Payment Options</li>
        </div>
        <div className='font-poppins font-medium text-[16px] pt-6'>My Orders</div>
        <div className='space-y-2 pl-6 list-none '>
            <li className='font-poppins font-normal text-sm leading-6 text-[#4b4a4a]'>My Returns</li>
            <li className='font-poppins font-normal text-sm leading-6 text-[#4b4a4a]'>My Cancellations</li>
        </div>
        <div className='font-poppins font-medium text-[16px] pt-6'>My WishList</div>
        </div>
        
        <div className='w-[970px] h-[690px] bg-[#FFFFFF] shadow-sm rounded-sm flex p-12 items-center justify-center
         '>
           <div className=''>
             <h3 className='font-poppins font-medium text-[20px] leading-7 text-[#Db4444]'>Edit Your Profile</h3>
            <div className='flex items-center justify-between w-[870px]'>
                <div className='w-[710px] h-auto py-4 space-y-2'>
                <p className='font-poppins font-normal text-[16px] leading-6'>First Name</p>
                <input type="Md" placeholder='Md' className='w-[330px] h-[50px] bg-[#f5F5F5] p-4 font-poppins font-normal text-[16px]'/>
                </div>
                <div className='w-[710px] h-auto py-4 space-y-2'>
                <p className='font-poppins font-normal text-[16px] leading-6'>Last Name</p>
                <input type="Rimel" placeholder='Rimel' className='w-[330px] h-[50px] bg-[#f5F5F5] p-4 font-poppins font-normal text-[16px]'/>
                </div>
            </div>
            <div className='flex items-center justify-between w-[870px]'>
                <div className='w-[710px] h-auto py-4 space-y-2'>
                <p className='font-poppins font-normal text-[16px] leading-6'>Email</p>
                <input type="" placeholder='rimel1111@gmail.com' className='w-[330px] h-[50px] bg-[#f5F5F5] p-4 font-poppins font-normal text-[16px]'/>
                </div>
                <div className='w-[710px] h-auto py-4 space-y-2'>
                <p className='font-poppins font-normal text-[16px] leading-6'>Address</p>
                <input type="" placeholder='Kingston, 5236, United State' className='w-[330px] h-[50px] bg-[#f5F5F5] p-4 font-poppins font-normal text-[16px]'/>
                </div>
            </div>
            <div className='w-[870px] h-auto py-4 space-y-2'>
                <p className='font-poppins font-normal text-[16px] leading-6'>Password Changes</p>
                <input type="" placeholder='Current Passwod' className='w-[770px] h-[50px] bg-[#f5F5F5] p-4 font-poppins font-normal text-[16px]'/>
            </div>
            <div className='w-[870px] h-auto py-4 space-y-2'>
                <p className='font-poppins font-normal text-[16px] leading-6'>Password Changes</p>
                <input type="" placeholder='New Passwod' className='w-[770px] h-[50px] bg-[#f5F5F5] p-4 font-poppins font-normal text-[16px]'/>
            </div>
            <div className='w-[870px] h-auto py-4 space-y-2'>
                <p className='font-poppins font-normal text-[16px] leading-6'>Password Changes</p>
                <input type="" placeholder='Confirm New Passwod' className='w-[770px] h-[50px] bg-[#f5F5F5] p-4 font-poppins font-normal text-[16px]'/>
            </div>
           <div className='w-[303px] h-14 flex gap-4 items-center justify-end'>
            <p className='font-poppins font-normal text-[16px] leading-6'>Cancel</p>
            <button className='w-[214px] h-14 bg-[#Db4444] rounded-sm'>Save Changes</button>
           </div>
           </div>
        </div>
        </div>
           

        </div>
        <Footer/>
    </div>
  )
}

export default Account