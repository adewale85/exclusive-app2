

import Heart from "../../assets/Fill Heart.svg";
import Eye from "../../assets/Fill Eye.svg";
import StarIcon from "../../assets/Star.svg"
import halfIcon from "../../assets/star-half-filled.svg"
import emptyIcon from "../../assets/EmptyStar.svg"

import { useEffect, useState } from "react";
import type { ProductResponse } from "../../../constants/Flash";
import { Link } from "react-router-dom";

function Myproducts() {

    const [data, setData] = useState <ProductResponse|null>(null)
      const [loading, setLoading] = useState (false)
      const [error, setError] = useState ("")
    

    
      useEffect(()=>{
        const flashProduct = async()=>{
          setLoading (true)
          try{
            const response  = await fetch ("https://dummyjson.com/products")
            if (!response.ok){
              throw new Error ("Something went wrong")
               }
                const data = await response.json()
              setData (data)
              console.log(data);
          } catch (error: unknown){
            setError (error?.message)
            console.log(error);
            
          } finally{
            setLoading(false)
          }
        }
        flashProduct()
      }, [])

  return (
    <div>
        <div className="flex items-center justify-between pb-12">
        {data?.products.slice(0,4).map(flashShareData=>(
          <div key={flashShareData.id} className="wrapper relative w-[270px] h-[250px] bg-[#f5f5f5] mb-3">
          

          <section className="wrapper relative w-[270px] h-[250px] bg-[#f5f5f5] mb-3">
            
              
                <div className="flex justify-between p-2 relative ">
                  <div className="w-[3.438rem] h-6.5  bg-[#DB4445] rounded-lg text-white flex items-center justify-center text-[1rem] font-normal leading-4">
                   -40%
                  </div>

                <div className="flex flex-col space-y-2">
                    <img src={Heart} alt="" className="w-8 h-8" />
                    <img src={Eye} alt="" className="w-8 h-8" />
                </div>
                </div>

                <div className="absolute inset-0 m-auto w-[190px] h-[180px]">
                 <Link to = {`/product/${flashShareData.id}`}>
                  <img src={flashShareData.thumbnail} alt={flashShareData.title} className="w-[190px] h-[180px] " />
                 </Link>
                </div> 

              <div className="group">
               {flashShareData && (
                <p className=" group-hover:hover  absolute w-full h-10 flex bottom-0 rounded-br-sm rounded-bl-sm items-center justify-center text-white bg-[black]">
                  Add To Cart
                </p>
               )}
            </div>  
   
              

           
            </section>

          <div className="font-poppins font-medium text-[16px] leading-6      space-y-2">
                <div className="font-poppins font-medium text-base leading-6">{flashShareData.title}</div>
                <div className="space-x-5">
                  <span className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445] ">
                    {flashShareData.price}
                  </span>
                  <span className="line-through font-poppins font-medium text-[16px] leading-6">
                     {flashShareData.price}
                  </span>
                </div>

                {/* <div>
               {bg && (
                <p className={`absolute w-full h-10 flex bottom-0 rounded-br-sm rounded-bl-sm items-center justify-center text-white 
                ${bg ? 'bg-[black]' : 'bg-transparent'} `}>
                  Add To Cart
                </p>
               )}
            </div>  */}

                    <div className='flex gap-3'>
                        {[1,2,3,4,5].map((star)=>{
                            const rating = flashShareData.rating
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
    </div>
  )
}

export default Myproducts