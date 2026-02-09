import Playstation from "../../../assets/playstation.svg";
import Woman_wearing from "../../../assets/woman_wearing.svg";
import Bt_Speaker from "../../../assets/Bt_Speaker.svg";
import Perfume from "../../../assets/Perfume.svg";

import { NewArrivalData } from "../../../constants/Arrival";

function NewArrival() {
  return (
    <div className="Wrapper">
      <div className="py-6">
        <div className="w-[24.813rem] h-[6.438rem] text-start ">
          <div className="flex gap-3 items-center">
            <div className="w-5 h-10 bg-red-500 rounded-md"></div>
            <div className="font-poppins font-semibold text-[16px] leading-5 text-[#db4444]">
              {" "}
              Featured
            </div>
          </div>
          <div className="py-3 font-inter font-semibold  text-[2.25rem] leading-12 tracking-[4%]">
            New Arrival
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 text-start">
        <div className="relative w-162.5 h-150 bg-black rounded-xl overflow-hidden">
          <img src={Playstation} alt="" className="mt-24 " />

          <div className="absolute left-6 bottom-10 text-white">
            <h2 className="text-2xl font-semibold tracking-[3%]">
              PlayStation 5
            </h2>

            <p className="text-sm mt-2 max-w-60.5">
              Black and White version of the PS5 coming out on sale.
            </p>

            <button className="mt-4 font-medium text-white text-[1rem] leading-6 border-b-2">
              Shop Now
            </button>
          </div>
        </div>

        <div className="">
          <div className="relative w-162.5 h-71 bg-black rounded-xl overflow-hidden">
            <img src={Woman_wearing} alt="" className="max-w-108 ml-48 " />

            <div className="absolute left-6 bottom-10 text-white">
              <h2 className="text-2xl font-semibold tracking-[3%]">
                Women’s Collections
              </h2>

              <p className="text-sm mt-2 max-w-60.5">
                Featured woman collections that give you another vibe.
              </p>

              <button className="mt-4 font-medium text-white text-[1rem] leading-6 border-b-2">
                Shop Now
              </button>
            </div>
          </div>
          <div className="flex gap-5 pt-5">
            <div className="relative w-[19.375rem] h-[17.75rem] bg-black rounded-xl overflow-hidden">
              <img
                src={Bt_Speaker}
                alt=""
                className="max-w-[27rem] mt-12 ml-12 "
              />

              <div className="absolute left-6 bottom-10 text-white">
                <h2 className="text-2xl font-semibold tracking-[3%]">
                  Speakers
                </h2>

                <p className="text-sm mt-2 max-w-[15.125rem]">
                  Amazon wireless speakers
                </p>

                <button className="mt-4 font-medium text-white text-[1rem] leading-6 border-b-2">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="relative w-[19.375rem] h-[17.75rem] bg-black rounded-xl overflow-hidden">
              <img
                src={Perfume}
                alt=""
                className="max-w-[27rem] mt-12 ml-12 "
              />

              <div className="absolute left-6 bottom-10 text-white">
                <h2 className="text-2xl font-semibold tracking-[3%]">
                  Perfume
                </h2>

                <p className="text-sm mt-2 max-w-[15.125rem]">
                  GUCCI INTENSE OUD EDP
                </p>

                <button className="mt-4 font-medium text-white text-[1rem] leading-6 border-b-2">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="py-33 flex gap-22 items-center justify-center">
        {NewArrivalData.map(({ id, image, title, subTitle }) => (
          <section
            key={id}
            className=" flex flex-col items-center justify-center"
          >
            <div>
              <img src={image} alt="Delivery-icon" className="size-20 pb-5" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="">
                <h3 className="font-poppins font-semibold text-[20px] leading-7 text-black">
                  {title}
                </h3>
              </div>
              <div>
                <h4 className="font-poppins font-normal text-[14px] leading-5 text-black">
                  {subTitle}
                </h4>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default NewArrival;
