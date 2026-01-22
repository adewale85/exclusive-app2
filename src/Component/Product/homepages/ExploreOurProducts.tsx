import { ExploreOurProductsData } from "../../../constants/Explore";
import Heart from "../../../assets/Fill Heart.svg";
import Eye from "../../../assets/Fill Eye.svg";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";


const ExploreOurProducts = () => {
  return (
    <section className="my-12 Wrapper ">
      <div className='flex gap-3 items-center '>
        <div className='w-[1.25rem] h-[2.5rem] bg-red-500 rounded-md'></div>
        <div className='font-poppins font-semibold text-[16px] leading-5 text-[#db4444]'>Our products</div>  
        </div> 
      <h2 className="font-inter font-semibold text-[36px] leading-12 tracking-[4%] my-6 mb-24">Explore Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {ExploreOurProductsData.map(
          ({ id, title, price,  image, rating, reviews, bg, icon1, icon2}) => (
            <div>
            <section
              key={id}
              className="relative w-[270px] h-[250px] bg-secondary rounded-xl p-4
                               flex items-center justify-between "
            >
             
                <div className="absolute inset-0 m-auto w-[190px] h-[180px]">
                  <img src={image} alt="" className="w-[190px] h-[180px] " />
           
             </div>
              
              <div className="flex items-center justify-center top-3 absolute ">
                  { bg && (
                  <h3 className= {` w-[51px] h-[26px] flex items-center justify-center text-[#FAFAFA] font-normal font-poppins text-[16px] leading-4 
                  ${bg ? 'bg-[#00FF66] ' : 'bg-transparent'}`} > NEW
                  
                </h3>)

                }
              </div>



                <div className=" flex flex-col gap-2  absolute top-3 right-3">
                  <button className=" ">
                    <img src={Heart} alt="" className="w-8 h-8" />
                  </button>
                  <button className=" ">
                    <img src={Eye} alt="" className="w-8 h-8" />
                  </button>
                </div>
              
            </section>
          <div className="py-6">
                <div className="w-full text-start py-5">
                <div className="font-poppins font-medium text-[16px] leading-6 text-black ">
                  {title}
                </div>
                <div className="flex gap-5 items-center ">
                  <span>{price}</span>

      <div className="flex gap-1">
        {[1,2,3,4,5].map((star) => rating >= star ?(
          <FaStar key={star} className="text-yellow-500" />
        ): rating >= star - 0.5 ? (
          <FaStarHalfAlt key={star} className="text-yellow-500" />
        ):(
          <FaRegStar key={star} className="text-gray-400" />
        )
      )}

   
                    <span className="ml-2 text-sm text-gray-600">
                      ({reviews})
                    </span>
                  </div>
                </div>
          <div className="flex gap-3 mt-2">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
          </div>
              </div>
          </div>


            </div>
          )
        )}
      </div>
      

      <div className="mt-8 flex items-center justify-center">
        <button className="w-[234px]  bg-[#ed4a4a] text-white font-poppins font-semibold text-[16px] leading-16 rounded-sm">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ExploreOurProducts;
