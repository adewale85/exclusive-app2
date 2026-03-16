import { useState } from "react";
import { IoMdHeartEmpty, IoMdMenu, IoMdClose } from "react-icons/io";
import NavInput from "./NavInput";
import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import DropNav from "./DropNav";
import SidebarCategoryDetails from "./SidebarCategory";
import { useCart } from "../../CartContext";

function Navbar() {
  const { cartCount } = useCart();
  const isloggedIn = false;
  const [isOpen, setIsOpen] = useState(false);

  const Navlinks = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Contact", path: "/contact" },
    { id: 3, label: "About", path: "/about" },
    { id: 4, label: "Sign up", path: "/signup" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      
      <div className="Wrapper my-5 px-4 lg:px-0">
        <div className="flex items-center justify-between">

          {/* Mobile Sidebar Button */}
          <div className="lg:hidden block">
            <SidebarCategoryDetails />
          </div>

          {/* Logo */}
          <NavLink
            to="/"
            className="font-inter font-bold text-[1.5rem] text-black"
          >
            Exclusive
          </NavLink>

          {/* Desktop Navlinks */}
          <ul className="hidden lg:flex gap-12">
            {Navlinks.map(({ id, label, path }) => (
              <li key={id} className="list-none">
                <NavLink
                  to={path}
                  className="hover:text-red-500 font-poppins transition-colors"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Search and Icons */}
          <div className="flex items-center gap-4">
            
            {/* Desktop Search */}
            <div className="hidden lg:block">
              <NavInput />
            </div>

            <ul className="flex gap-3 lg:gap-5 items-center relative">

              {/* Wishlist */}
              <Link to={"/wishlist"}>
                <IoMdHeartEmpty className="w-7 h-7" />
              </Link>

              {/* Cart */}
              <Link to={"/cart"} className="relative">
                <IoCartOutline className="w-7 h-7" />

                {cartCount > 0 && (
                  <span
                    className="absolute -top-2 -right-2 flex items-center justify-center 
                    bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 border-2 border-white"
                  >
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* User Dropdown */}
              {isloggedIn && (
                <li>
                  <DropNav />
                </li>
              )}

              {/* Mobile Menu Button */}
              <li className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-3xl"
                >
                  {isOpen ? <IoMdClose /> : <IoMdMenu />}
                </button>
              </li>

            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="mt-4 px-4 lg:hidden">
        <NavInput />
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden absolute top-full left-0 bg-gray-400 w-full text-white z-50 shadow-lg`}
      >
        <ul className="flex flex-col p-5 gap-4">
          {Navlinks.map(({ id, label, path }) => (
            <li key={id}>
              <NavLink
                onClick={() => setIsOpen(false)}
                to={path}
                className="block text-lg font-poppins py-2"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Border */}
      <div className="border-b-2 opacity-30 pt-5"></div>

    </nav>
  );
}

export default Navbar;