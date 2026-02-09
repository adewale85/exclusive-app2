

import { useCountdown } from "../../../utils/useCountdown";

import { Link } from "react-router-dom";
import Myproducts from "../../Layout/Myproducts";


import LeftArrow from "../../../assets/LeftArrow.svg"
import RightArrow from "../../../assets/RightArrow.svg"


 


const FlashShare = () => {

//  const [displayLimit,setDisplayLimit] = useState (4)
//  const handleNext = () => {
//   setDisplayLimit (displayLimit + 1)
//  }
//  const handlePrev = () =>{
//   setDisplayLimit (displayLimit - 1)
//  }





 

   const { days, hours, minutes, seconds } =
    useCountdown("2026-02-01"); 

  return (
    <div className="Wrapper space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-12  ">
          <div className="w-[13.188rem] h-[6.438rem]  ">
            <div className="flex gap-3 items-center">
              <div className="w-[1.25rem] h-[2.5rem] bg-red-500 rounded-md"></div>
              <div className="font-semibold text-[1rem] leading-5">
                Today’s
              </div>
            </div>
            <div className=" text-[2.25rem] leading-[3rem] tracking-[4%]">
              Flash Sales
            </div>
          </div>

          <div className="flex ">
            <div className="flex gap-5">
              <div className="w-[46px] h-[50px]  mt-8 ">
                <div className="font-medium text-[1rem] leading-4">Days</div>
                
                <div className="font-bold text-[2rem] leading-8 tracking-[4%]">
                {String(days).padStart(2, "0")}
                </div>

              </div>

              <div className=" flex flex-col gap-3 mt-14">
                <div className="w-[5px] h-[5px] bg-red-500 rounded-full"></div>
                <div className="w-[5px] h-[5px] bg-red-500 rounded-full"></div>
              </div>

              <div className="w-[46px] h-[50px] mt-8">
                <div className="font-medium text-[1rem] leading-4">Hours</div>
                <div className="font-bold text-[2rem] leading-8 tracking-[4%]">
                  {String(hours).padStart(2,"0")}
                </div>
              </div>

              <div className=" flex flex-col gap-3 mt-14">
                <div className="w-[5px] h-[5px] bg-red-500 rounded-full"></div>
                <div className="w-[5px] h-[5px] bg-red-500 rounded-full"></div>
              </div>

              <div className="w-[2.875rem] h-[3.125rem]  mt-8">
                <div className="font-medium text-[1rem] leading-4">Minutes</div>
                <div className="font-bold text-[2rem] leading-8 tracking-[4%]">
                  {String(minutes).padStart(2, "0")}
                </div>
              </div>

              <div className=" flex flex-col gap-3 mt-14">
                <div className="w-[5px] h-[5px] bg-red-500 rounded-full"></div>
                <div className="w-[5px] h-[5px] bg-red-500 rounded-full"></div>
              </div>

              <div className="w-[2.875rem] h-[3.125rem] mt-8">
                <div className="font-medium text-[1rem] leading-4">Seconds</div>
                <div className="font-bold text-[2rem] leading-8 tracking-[4%]">
                  {String(seconds).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="flex gap-3">
          <img src={LeftArrow} alt=""  className="w-[46px] h-[46px]" />
          <img src={RightArrow} alt="" className="w-[46px] h-[46px]" />
        </div> 
      </div>


      

      <div>
        <Myproducts/>
      </div>

       {/* <div>
               {bg && (
                <p className={`absolute w-full h-10 flex bottom-0 rounded-br-sm rounded-bl-sm items-center justify-center text-white 
                ${bg ? 'bg-[black]' : 'bg-transparent'} `}>
                  Add To Cart
                </p>
               )}
            </div> 
       */}
     

      
        <div className="flex items-center justify-center py-22">
        <Link to="/">
        <button  className="w-[234px] h-14 bg-primary rounded-sm text-white text-[16px] font-medium leading-6 font-poppins">View All Products</button>
        </Link>

      </div>
      <div className="wrapper border-b-[0.5px] opacity-30 ">
        
      </div>
    </div>
  );
};

export default FlashShare;


