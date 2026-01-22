
import { IoSearch } from 'react-icons/io5'


function NavInput() {

  return (
    
           <div className="flex gap-5 items-center justify-center">
            <div className="relative w-[347px]">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="font-poppins text-[0.75rem] font-normal leading-4 w-full h-9.5 bg-[#F5F5f5] rounded-sm border-none text-black px-3"
              />
              <IoSearch className="absolute right-3 top-2 text-[1.2rem] cursor-pointer" />
            </div>
            
          </div>
    
  )
}

export default NavInput