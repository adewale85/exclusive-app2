import { useState } from "react"; // 1. Import useState
import { IoMdHeartEmpty, IoMdMenu, IoMdClose } from "react-icons/io"; // Added Menu icons
import NavInput from "./NavInput";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import DropNav from "./DropNav";

function Navbar() {
  const isloggedIn = false;
  const [isOpen, setIsOpen] = useState(false); // 2. State for mobile menu

  const Navlinks = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Contact", path: "/contact" },
    { id: 3, label: "About", path: "/about" },
    { id: 4, label: "Sign up", path: "/signup" },
  ];

  return (
    <nav className="relative">
      <div className="Wrapper my-5 px-4 lg:px-0">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <NavLink to="/" className="font-inter font-bold text-[1.5rem] text-black">
            Exclusive
          </NavLink>

          {/* Desktop Navlinks - Hidden on Mobile */}
          <ul className="hidden lg:flex gap-12  ">
            {Navlinks.map(({ id, label, path }) => (
              <li key={id} className="list-none">
                <NavLink to={path} className="hover:text-red-500 font-poppins transition-colors">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Search and Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block"> <NavInput /> </div>
            
            <ul className="flex gap-3 lg:gap-5 items-center">
              <li><a href="/wishlist"><IoMdHeartEmpty className="w-7 h-7" /></a></li>
              <li><a href="/cart"><IoCartOutline className="w-7 h-7" /></a></li>
              {isloggedIn && <li><DropNav /></li>}
              
              {/* 3. Hamburger Button - Only visible on Mobile */}
              <li className="lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
                  {isOpen ? <IoMdClose /> : <IoMdMenu />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
          <div className="mt-2 lg:hidden">
             <NavInput />
          </div>

      {/* 4. Mobile Menu Drawer */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden absolute top-full left-0 bg-gray-400 w-full  text-white z-50  shadow-lg animate-in slide-in-from-top`}>
        <ul className="flex flex-col p-5 gap-4">
          
          {Navlinks.map(({ id, label, path }) => (
            <li key={id}>
              <NavLink 
                onClick={() => setIsOpen(false)} 
                to={path} 
                className="block text-lg font-poppins py-2 "
              >
                {label}
              </NavLink>
            </li>
          ))}
          
        </ul>
      </div>

      <div className="border-b-2 py-2 opacity-30"></div>
    </nav>
  );
}

export default Navbar;






// import { IoMdHeartEmpty } from "react-icons/io";
// import NavInput from "./NavInput";
// import { NavLink } from "react-router-dom";
// import { IoCartOutline } from "react-icons/io5";
// import DropNav from "./DropNav";

// function Navbar() {
//  const isloggedIn = false;

//  const Navlinks = [
//  { id: 1, label: "Home", path: "/" },
//  { id: 2, label: "Contact", path: "/contact" },
//  { id: 3, label: "About", path: "/about" },
//  { id: 4, label: "Sign up", path: "/signup" },
// ];

//  return (
//  <div>
//  <div className="Wrapper my-5">
//  <div className="flex items-center justify-between ">
//  <NavLink
//  to="/"
//  className="flex space-x-10 font-inter font-bold text-[1.5rem] leading-6 tracking-[3%] text-black"
//  >
//  Exclusive
//  </NavLink>

//  <div className="flex gap-12 ">
//  <ul className="flex gap-5">
//  {Navlinks.map(({ id, label, path }) => (
//  <li key={id}>
//  <NavLink
//  to={path}
//  className="font-normal font-poppins text-base leading-6 hover:text-red-500"
//  >
//  {label}
//  </NavLink>
//  </li>
//  ))}
//  </ul>
//  </div>

//  <NavInput />

//  <ul className="flex gap-5 items-center">
//  <li>
//  <a href="/wishlist">
//  <IoMdHeartEmpty className="w-8 h-8" />
//  </a>
//  </li>

//  <li>
//  <a href="/cart">
//  <IoCartOutline className="w-8 h-8" />
//  </a>
//  </li>
//  {isloggedIn && (
//  <li>
//  <DropNav />
//  </li>
// )}
//  </ul>
//  </div>
// </div>
//  <div className="border-b-2  opacity-30 "></div>
//  </div>
// );
// }

// export default Navbar;
