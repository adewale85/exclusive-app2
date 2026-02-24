
import { BsPerson } from 'react-icons/bs'
import { IoMdHeartEmpty } from 'react-icons/io'
import { IoCartOutline, IoSearch } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

function WishlistNav() {

const WishLinkNav = [
  {id:1 , label: "Home", path:"/"},
  {id:1 , label: "Contact", path:"contact"},
  {id:1 , label: "About", path:"about"},
  {id:1 , label: "signup", path:"Sign-Up"}
]

  return (
    <div>
         <div>
      <div className='Wrapper my-5'>
        <div className='flex items-center justify-between'>
          
          <div className='font-inter font-bold text-[1.5rem]'>
            Exclusive
          </div>

          <ul className='flex gap-12 list-none'>
            {WishLinkNav.map(({id, label, path})=>(
              <li key={id}>
                <NavLink to={path}>
                  {label}
                </NavLink>

              </li>
            ))}
          </ul>


          <div className='flex gap-5 items-center'>
            <div className="relative w-[347px]">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full h-9.5 bg-[#f5F5F5] px-3"
              />
              <IoSearch className="absolute right-3 top-2" />
            </div>

           <div className='flex gap-4 list-none'>
            <li><a href="/wishlist"><IoMdHeartEmpty className='w-7 h-7 ' /></a></li>
            <li> <a href="/cart"><IoCartOutline className='w-7 h-7 '/></a></li>
            <li><a href=""><BsPerson className='w-7 h-7 '/></a></li>
           </div>
          </div>

        </div>
      </div>
      <div className='border-b-2 opacity-30'></div>
    </div>
    </div>
  )
}

export default WishlistNav