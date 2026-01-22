import { IoMdHeartEmpty } from "react-icons/io";
import NavInput from "./NavInput";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import DropNav from "./DropNav";


function Navbar() {
  const isloggedIn = false

  const Navlinks = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Contact", path: "/contact" },
    { id: 3, label: "About", path: "/about" },
    { id: 4, label: "Sign up", path: "/signup" },
  ];

  return (
    <div>
      <div className="Wrapper my-5">
        <div className="flex items-center justify-between ">
          <NavLink
            to="/"
            className="flex space-x-10 font-inter font-bold text-[1.5rem] leading-6 tracking-[3%] text-black"
          >
            Exclusive
          </NavLink>

          <div className="flex gap-12 ">
            <ul className="flex gap-5">
              {Navlinks.map(({ id, label, path }) => (
                <li key={id}>
                  <NavLink
                    to={path}
                    className="font-normal font-poppins text-base leading-6 hover:text-red-500"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <NavInput />

          <ul className="flex gap-5 items-center">
              <li>
                <a href="/wishlist">
                  <IoMdHeartEmpty className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="/cart">
                  <IoCartOutline className="w-8 h-8" />
                </a>
              </li>
              {isloggedIn && ( <li>
                <DropNav/>
              </li>)}
            </ul>

        </div>
      </div>
      <div className="border-b-2  opacity-30 "></div>
    </div>
  );
}

export default Navbar;
