import { type Exploreprops } from "../../../constants/Explore";
import Heart from "../../../assets/Fill Heart.svg";
import Eye from "../../../assets/Fill Eye.svg";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ExploreOurProducts = () => {

const [data, setData] = useState <Exploreprops|null>(null)
const [loading, setLoading] = useState (false)
const [error, setError] = useState  ("")


useEffect (()=>{
  const ExploreProduct = async () =>{
    
  
  setLoading(true)
  try{
    const response = await fetch ("https://dummyjson.com/products")
    if (!response.ok){
      throw new Error("Something went wrong")
    } const data = await response.json()
    setData (data)
    console.log(data);
  } catch (error:unknown){
    setError(error?.message)
    console.log(error);
    
  }finally{
    setLoading(false)
  }
  }
  ExploreProduct()
}, [])

  return (
    <section className=" Wrapper ">
      <div className='flex gap-3 items-center '>
        <div className='w-[1.25rem] h-[2.5rem] bg-red-500 rounded-md'></div>
        <div className='font-poppins font-semibold text-[16px] leading-5 text-[#db4444]'>Our products</div>  
        </div> 
      <h2 className="font-inter font-semibold text-[36px] leading-12 tracking-[4%] my-6 mb-24">Explore Our Products</h2>
      <div className="space-y-12">
      <div className="flex items-center justify-between gap-5 Wrapper">
        {data?.products.slice(10,14).map(ExploreOurProductsData=>(
          <div key={ExploreOurProductsData.id}>
            <section className="wrapper relative w-[270px] h-[250px] bg-[#f5f5f5] mb-3 ">
              
              <div className="flex justify-between p-3 relative ">
                  <div className="flex flex-col space-y-2">
                    <img src={Heart} alt="" className="w-8 h-8" />
                    <img src={Eye} alt="" className="w-8 h-8" />
                  </div>
                </div>
                  <div className="absolute inset-0 m-auto w-[190px] h-[180px]">
                    <img src={ExploreOurProductsData.thumbnail} alt={ExploreOurProductsData.title} className=" " />
                  </div>
            </section>
              <div className="font-poppins font-medium text-base leading-6">
                {ExploreOurProductsData.title}
                <div className="font-poppins font-medium text-base leading-6 text-[#DB4445] ">
                  {ExploreOurProductsData.price}
                </div>
                
              </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-5 Wrapper">
        {data?.products.slice(15,19).map(ExploreOurProductsData=>(
          <div key={ExploreOurProductsData.id}>
            <section className="wrapper relative w-[270px] h-[250px] bg-[#f5f5f5] mb-3 ">
              
              <div className="flex justify-between p-3 relative ">
                  <div className="flex flex-col space-y-2">
                    <img src={Heart} alt="" className="w-8 h-8" />
                    <img src={Eye} alt="" className="w-8 h-8" />
                  </div>
                </div>
                  <div className="absolute inset-0 m-auto w-[190px] h-[180px]">
                    <img src={ExploreOurProductsData.thumbnail} alt={ExploreOurProductsData.title} className=" " />
                  </div>
            </section>
              <div className="font-poppins font-medium text-base leading-6">
                {ExploreOurProductsData.title}
                <div className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445] ">
                  {ExploreOurProductsData.price}
                </div>
                
              </div>
          </div>
        ))}
      </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
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
                  <div>{price}</div>
                <div className="flex gap-5 items-center ">

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
      </div> */}
      

      <div className="flex items-center justify-center py-22">
        <Link to="/AllProductDetails">
        <button  className="w-[234px] h-14 bg-primary rounded-sm text-white text-[16px] font-medium leading-6 font-poppins">View All Products</button>
        </Link>

      </div>
    </section>
  );
};

export default ExploreOurProducts;
