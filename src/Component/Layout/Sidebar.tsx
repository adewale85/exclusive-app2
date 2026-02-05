import IphoneIcon from "../../assets/Apple_logo.svg";
import Right_Arrow from "../../assets/Right_Arrow.svg";

import Banner from "./Banner";
import SidebarCategoryDetails from "./SidebarCategory";
function Sidebar() {
  
  return (
    <section className=" Wrapper mt-5 flex gap-16 pb-22">
      <div className="flex gap-12">
        <SidebarCategoryDetails />

        <div className="relative">
          <div className=" flex relative w-[892px] h-full bg-black justify-between">
            <div className="p-12 space-y-10 ">
              <div className="flex gap-8 items-center">
                <img
                  src={IphoneIcon}
                  alt="Apple iPhone logo"
                  className="w-10 h-[49px]"
                />
                <p className="font-poppins font-normal text-base leading-6 text-[#FAFAFA]">
                  iPhone 14 Series
                </p>
              </div>

              <div>
                <h2 className="w-[294px] font-poppins font-semibold leading-12 tracking-[0.04em] text-[#FAFAFA] text-[40px] ">
                  Up to 10% off Voucher
                </h2>
              </div>

              <div>
                <p className="font-poppins font-medium text-base leading-6 text-[#FAFAFA] flex gap-5">
                  Shop Now
                  <span>
                    <img src={Right_Arrow} alt="" />
                  </span>
                </p>
              </div>
            </div>

           
            <Banner/>
           

          
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
