import LeftArrow from "../../../assets/LeftArrow.svg";
import RightArrow from "../../../assets/RightArrow.svg";
import Heart from "../../../assets/Fill Heart.svg";
import Eye from "../../../assets/Fill Eye.svg";
import { FlashShareData } from "../../../constants/Flash";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useCountdown } from "../../../utils/useCountdown";



 


const FlashShare = () => {

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
              <div className="w-[2.875rem] h-[3.125rem]  mt-8 ">
                <div className="font-medium text-[1rem] leading-4">Days</div>
                
                <div className="font-bold text-[2rem] leading-8 tracking-[4%]">
                {String(days).padStart(2, "0")}
                </div>

              </div>

              <div className=" flex flex-col gap-3 mt-14">
                <div className="w-[5px] h-[5px] bg-red-500 rounded-full"></div>
                <div className="w-[5px] h-[5px] bg-red-500 rounded-full"></div>
              </div>

              <div className="w-[2.875rem] h-[3.125rem] mt-8">
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
          <img src={LeftArrow} alt="" className="w-[46px] h-[46px]" />
          <img src={RightArrow} alt="" className="w-[46px] h-[46px]" />
        </div>
      </div>

      <div className=" flex items-center justify-between">
        {FlashShareData.map(
          ({
            id,
            title,
            price,
            image,
            rating,
            reviews,
            subTitle,
            oldPrice,
            bg,
          }) => (
            <section className="">
              <div
                key={id}
                className="wrapper relative w-[270px] h-[250px] bg-[#f5f5f5] mb-3 "
              >
                <div className="flex justify-between p-2 relative ">
                  <div className="w-[3.438rem] h-6.5  bg-[#DB4445] rounded-lg text-white flex items-center justify-center text-[1rem] font-normal leading-4">
                    {subTitle}
                  </div>

                  <div className="flex flex-col space-y-2">
                    <img src={Heart} alt="" className="w-8 h-8" />
                    <img src={Eye} alt="" className="w-8 h-8" />
                  </div>
                </div>
                <div className="absolute inset-0 m-auto w-[190px] h-[180px]">
                  <img src={image} alt="" className="w-[190px] h-[180px] " />
           
             </div>

            <div>
               {bg && (
                <p className={`absolute w-full h-10 flex bottom-0 rounded-br-sm rounded-bl-sm items-center justify-center text-white 
                ${bg ? 'bg-[black]' : 'bg-transparent'} `}>
                  Add To Cart
                </p>
               )}
            </div>
   
              </div>

              <div className="font-poppins font-medium text-[16px] leading-6 space-y-2">
                <div className="">{title}</div>
                <div className="space-x-5">
                  <span className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445] ">
                    {price}
                  </span>
                  <span className="font-poppins font-medium text-[16px] leading-6">
                    {oldPrice}
                  </span>
                </div>
                <div>
                  <div className="flex gap-1 space-y-2">
                    {[1, 2, 3, 4, 5].map((star) =>
                      rating >= star ? (
                        <FaStar key={star} className="text-yellow-500" />
                      ) : rating >= star - 0.5 ? (
                        <FaStarHalfAlt key={star} className="text-yellow-500" />
                      ) : (
                        <FaRegStar key={star} className="text-gray-400" />
                      )
                    )}

                    <span className="ml-2 text-sm text-gray-600">
                      ({reviews})
                    </span>
                  </div>
                </div>
              </div>
            </section>
          )
        )}
      </div>
      <div className="flex items-center justify-center py-12">
        <button className="w-[234px] h-14 bg-primary rounded-sm text-white text-[16px] font-medium leading-6 font-poppins">View All Products</button>
      </div>
      <div className="wrapper border-b-[0.5px] opacity-30 ">
        
      </div>
    </div>
  );
};

export default FlashShare;
