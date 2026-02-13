import { useCountdown } from "../../../utils/useCountdown";
import { Link } from "react-router-dom";
import Myproducts from "../../Layout/Myproducts";

import LeftArrow from "../../../assets/LeftArrow.svg";
import RightArrow from "../../../assets/RightArrow.svg";

const FlashShare = () => {
  const { days, hours, minutes, seconds } =
    useCountdown("2026-12-01");

    const Dots = () => (
  <div className="flex flex-col gap-2 lg:gap-3 shrink-0">
    <div className="md:size-[5px] size-[3px] bg-red-500 rounded-full"></div>
    <div className="md:size-[5px] size-[3px] bg-red-500 rounded-full"></div>
  </div>
);

  return (
    <div className="Wrapper space-y-6 lg:space-y-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between lg:space-y-0 space-y-8">
        
        {/* Title */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-[1.25rem] h-[2.5rem] bg-red-500 rounded-lg"></div>
            <span className="font-semibold text-[1rem]">
              Today’s
            </span>
          </div>

          <h2 className="lg:text-[36px] text-[25px] leading-8 tracking-[4%]">
            Flash Sales
          </h2>
        </div>

        {/* Countdown + Arrows */}
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full lg:w-auto">
          
          {/* Countdown */}
          <div className="flex items-center  gap-4 lg:gap-6 overflow-x-auto lg:overflow-visible">
            
            {/* Days */}
            <div className="w-[46px] text-center shrink-0">
              <p className="font-medium lg:text-[1rem] text-[12px]">
                Days
              </p>
              <p className="font-bold lg:text-[2rem] text-[1rem]">
                {String(days).padStart(2, "0")}
              </p>
            </div>

            <Dots />

            {/* Hours */}
            <div className="w-[46px] text-center shrink-0">
              <p className="font-medium lg:text-[1rem] text-[12px]">
                Hours
              </p>
              <p className="font-bold lg:text-[2rem] text-[1rem]">
                {String(hours).padStart(2, "0")}
              </p>
            </div>

            <Dots />

            {/* Minutes */}
            <div className="w-[46px] text-center shrink-0">
              <p className="font-medium lg:text-[1rem] text-[12px]">
                Minutes
              </p>
              <p className="font-bold lg:text-[2rem] text-[1rem]">
                {String(minutes).padStart(2, "0")}
              </p>
            </div>

            <Dots />

            {/* Seconds */}
            <div className="w-[46px] text-center shrink-0">
              <p className="font-medium lg:text-[1rem] text-[12px]">
                Seconds
              </p>
              <p className="font-bold lg:text-[2rem] text-[1rem]">
                {String(seconds).padStart(2, "0")}
              </p>
            </div>
          </div>
          </div>

          {/* Arrows */}
          <div className="flex lg:gap-3 gap-12">
            <img
              src={LeftArrow}
              alt="Previous"
              className="lg:w-[46px] w-7 h-[46px] cursor-pointer"
            />
            <img
              src={RightArrow}
              alt="Next"
              className="lg:w-[46px] w-7 h-[46px] cursor-pointer"
            />
          </div>
        
      </div>

      <Myproducts />

      {/* View All */}
      <div className="flex items-center justify-center py-10 lg::py-20">
        <Link to="/">
          <button className="w-[234px] h-14 bg-primary rounded-sm text-white text-[16px] font-medium">
            View All Products
          </button>
        </Link>
      </div>

      {/* Divider */}
      <div className="border-b-[0.5px] opacity-30"></div>
    </div>
  );
};

export default FlashShare;

/* Small helper (keeps JSX clean, layout unchanged) */

