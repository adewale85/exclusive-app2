import Playstation from "../../../assets/playstation.svg";
import Woman_wearing from "../../../assets/woman_wearing.svg";
import Bt_Speaker from "../../../assets/Bt_Speaker.svg";
import Perfume from "../../../assets/Perfume.svg";
import { NewArrivalData } from "../../../constants/Arrival";
import { Link } from "react-router-dom";

function NewArrival() {
  return (
    <div className="Wrapper px-4 md:px-0">
      {/* Header Section */}
      <div className="py-10">
        <div className="flex gap-3 items-center">
          <div className="w-5 h-10 bg-red-500 rounded-md"></div>
          <div className="font-poppins font-semibold text-base text-[#db4444]">
            Featured
          </div>
        </div>
        <div className="py-3 font-inter font-semibold text-3xl md:text-[36px] tracking-wider">
          New Arrival
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto">
        
        {/* Left Big Card (PlayStation) */}
        <div className="relative bg-black rounded-xl overflow-hidden min-h-[400px] lg:h-[700px] lg:w-[570px] w-full flex items-end justify-center">
          <img 
            src={Playstation} 
            alt="PS5" 
            className="w-full h-full object-contain mt-10 md:mt-20" 
          />
          <div className="absolute left-6 bottom-8 md:bottom-10 text-white z-10">
            <h2 className="text-xl md:text-2xl font-semibold">PlayStation 5</h2>
            <p className="text-xs md:text-sm mt-2 max-w-[250px]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link to={"/EveryProduct"}>
            <button className="mt-4 font-medium border-b border-gray-400 hover:text-gray-300 transition-colors">
              Shop Now
            </button>
            </Link>
          </div>
        </div>

        {/* Right Section Grid */}
        <div className="grid grid-rows-2 gap-6">
          
          {/* Top Wide Card (Women's Collection) */}
          <div className="relative bg-black rounded-xl overflow-hidden min-h-[250px] flex md:flex-row flex-col md:justify-end justify-center">
            <div className="flex items-center justify-center md:h-full max-h-full object-contain  ">
              <img 
              src={Woman_wearing} 
              alt="Women's Collection" 
              className="" 
            />
            </div>
            <div className="absolute left-6 bottom-8 text-white z-10">
              <h2 className="text-xl md:text-2xl font-semibold">Women’s Collections</h2>
              <p className="text-xs md:text-sm mt-2 max-w-[200px]">
                Featured woman collections that give you another vibe.
              </p>
              <Link to={"/EveryProduct"}>
              <button className="mt-3 font-medium border-b border-gray-400">
                Shop Now
              </button>
              </Link>
            </div>
          </div>

          {/* Bottom Two Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Speakers */}
            <div className="relative bg-black rounded-xl overflow-hidden min-h-[250px] flex items-center justify-center">
              <img src={Bt_Speaker} alt="Speakers" className="p-10 object-contain" />
              <div className="absolute left-6 bottom-6 text-white z-10">
                <h2 className="text-lg md:text-xl font-semibold">Speakers</h2>
                <p className="text-xs mt-1">Amazon wireless speakers</p>
               <Link to={"/EveryProduct"}>
                <button className="mt-2 text-sm border-b border-gray-400">Shop Now</button>
               </Link>
              </div>
            </div>

            {/* Perfume */}
            <div className="relative bg-black rounded-xl overflow-hidden min-h-[250px] flex items-center justify-center">
              <img src={Perfume} alt="Perfume" className="p-10 object-contain" />
              <div className="absolute left-6 bottom-6 text-white z-10">
                <h2 className="text-lg md:text-xl font-semibold">Perfume</h2>
                <p className="text-xs mt-1">GUCCI INTENSE OUD EDP</p>
                <Link to={"/EveryProduct"}>
                <button className="mt-2 text-sm border-b border-gray-400">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Features (Responsive Wrap) */}
      <div className="py-20 flex flex-wrap gap-10 md:gap-20 items-center justify-center">
        {NewArrivalData.map(({ id, image, title, subTitle }) => (
          <section key={id} className="flex flex-col items-center text-center max-w-[250px]">
            <div className="bg-gray-200 p-3 rounded-full mb-4">
               <div className="bg-black p-3 rounded-full">
                  <img src={image} alt="icon" className="size-10 invert" />
               </div>
            </div>
            <h3 className="font-semibold text-lg uppercase">{title}</h3>
            <p className="text-sm text-gray-600">{subTitle}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default NewArrival;