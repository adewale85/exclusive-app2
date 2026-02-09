import { type ProductDetails } from "../../../constants/sellingProducts";
import Heart from '../../../assets/Fill Heart.svg'
import Eye from '../../../assets/Fill Eye.svg'
import StarIcon from "../../../assets/Star.svg"
import halfIcon from "../../../assets/star-half-filled.svg"
import emptyIcon from "../../../assets/EmptyStar.svg"
import { useEffect, useState } from "react";

const BestSellingProducts = () => {

const [data, setData] = useState <ProductDetails|null>(null)
const [loading, setLoading] = useState (false)
const [error, setError] = useState ("")

useEffect(()=>{
  const sellingProduct = async()=>{
    setLoading(true)
    try{
      const response = await fetch ("https://dummyjson.com/products")
      if (!response.ok){
        throw new Error ("Something went wrong") 
      }
         const data = await response.json()
        setData(data)
        console.log(data);
    } catch (error:unknown){
      setError (error?.message)
      console.log(error);
      
    } finally{
      setLoading(false)
    }
  }
  sellingProduct()
}, [])

  return (
    <section className="mt-12 px-4 Wrapper ">
       <div className='flex gap-3 items-center mb-5'>
        <div className='w-5 h-10 bg-red-500 rounded-md'></div>
        <div className='font-poppins font-semibold text-[16px] leading-5 text-[#db4444]'>This Month</div>  
        </div> 
      <h2 className="font-inter font-semibold text-4xl leading-12 tracking-[4%] mb-12">Best Selling Products</h2>


    <div className="flex items-center justify-between py-6">
      {data?.products.slice(5,9).map (BestSellingProductData=>(
        <div key={BestSellingProductData.id} className="
                       flex flex-col ">
           
         <section className="wrapper relative w-[270px] h-[250px] bg-[#f5f5f5] mb-3">
            
              
                <div className="flex justify-between p-2 relative  z-40">
                

                  <div className="flex flex-col space-y-2">
                    <img src={Heart} alt="" className="w-8 h-8" />
                    <img src={Eye} alt="" className="w-8 h-8" />
                  </div>
              <div className="absolute z-10">
               {BestSellingProductData.description && (
                <div className={`absolute w-full h-10 flex top-40 rounded-br-sm rounded-bl-sm items-center justify-center  
                ${BestSellingProductData.description ? 'bg-[black]' : 'bg-transparent'} `}>
                 <p> Add To Cart</p>
                </div>
               )}
            </div> 
                </div>
                <div className="absolute inset-0 m-auto w-[190px] h-[180px]">
                  <img src={BestSellingProductData.thumbnail} alt={BestSellingProductData.title} className="w-[190px] h-[180px] " />
           
             </div> 
             

            
            </section>
            <div className="space-y-2">
            <div className="font-poppins font-medium text-base leading-6">
               {BestSellingProductData.title}
            </div>
               <div className="space-x-5">
                  <span className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445] ">
                    {BestSellingProductData.price}
                  </span>
                  <span className="line-through font-poppins font-medium text-[16px] leading-6">
                     {BestSellingProductData.price}
                  </span>
                </div>

               

                <div className='flex gap-3'>
                        {[1,2,3,4,5].map((star)=>{
                            const rating = BestSellingProductData.rating
                            if (rating >= star){
                                return <img src={StarIcon} alt="" />
                            } else if (rating >=star-0.5){
                                return <img src={halfIcon} alt="" />
                            } else {
                                <img src={emptyIcon} alt="" />
                            }
                        })}
                        {/* <span>{flashShareData.reviews}</span> */}
                    </div>
                  </div>
        </div>


      ))}
      
    </div>
     
    
    </section>
  );
};

export default BestSellingProducts; 
