import IphoneIcon from "../../assets/Apple_logo.svg";
import Right_Arrow from "../../assets/Right_Arrow.svg";

import Banner from "./Banner";
import SidebarCategoryDetails from "./SidebarCategory";
function Sidebar() {
  
  return (
    <section className="relative Wrapper mt-5 flex md:flex-row flex-col gap-16 pb-22">
      <div className="flex lg:flex-row flex-col relative lg:gap-12 gap-3">
        <div className="lg:block hidden">
          <SidebarCategoryDetails />
        </div>

        <div className="relative">
          <div className="flex md:flex-row flex-col relative md:w-[892px] w-full h-full bg-black justify-between">
            <div className="md:p-12 p-6 space-y-10 ">
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

           
            <div className="flex md:flex-row flex-col items-center">
              <Banner/>
            </div>
           

          
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
