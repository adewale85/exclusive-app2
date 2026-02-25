import { useState } from "react";
import User_Profile from "../../assets/User_Profile.svg";
import User from "../../assets/user.svg";
import MyOder from "../../assets/icon-mallbag.svg";
import Cancellation from "../../assets/icon-cancel.svg";
import Review from "../../assets/Review.svg";
import Logout from "../../assets/Icon-logout.svg";

interface DropdownItemProps {
  text: string;
}

function DropNav() {



  const [open, setOpen] = useState(false);

  return (

      <div className="Wrapper my-5">
        <div className="flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <div className="relative">
              <button onClick={() => setOpen(!open)}>
                <img src={User_Profile} alt="user" />
              </button>

              {open && ( 
                <div className="absolute text-white text-start w-56 bg-red-200 shadow-lg rounded-md z-50 ">
                  <div className="flex gap-5 text-start">
                    <img src={User} alt="" className="size-[6]" />
                    <a href="/Account">
                      <DropdownItem text="Manage My Account" />
                    </a>
                  </div>
                  <div className="flex gap-5 text-start">
                    <img src={MyOder} alt="" className="size-[6]" />
                    <DropdownItem text="My Orders" />
                  </div>
                  <div className="flex gap-5 ">
                    <img src={Cancellation} alt="" className="size-[6]" />
                    <DropdownItem text="My Cancellations" />
                  </div>
                  <div className="flex gap-5 ">
                    <img src={Review} alt="" className="size-[6]" />
                    <DropdownItem text="My Reviews" />
                  </div>

                  <div className="flex gap-5 ">
                    <img src={Logout} alt="" className="size-[6]" />
                    <hr />
                    <DropdownItem text="Logout" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

  );
}



function DropdownItem({ text }:DropdownItemProps) {
  return <button className="  hover:bg-black text-sm">{text}</button>;
}

export default DropNav;
