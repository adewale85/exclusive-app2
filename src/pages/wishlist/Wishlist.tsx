
import Footer from "../../Component/Layout/Footer";
import { type ListResponse } from "../../constants/List";
import DeleteBtn from "../../assets/DeleteBtn.svg";


import StarIcon from "../../assets/Star.svg"
import halfIcon from "../../assets/star-half-filled.svg"
import emptyIcon from "../../assets/EmptyStar.svg"
import Navbar from "../../Component/Layout/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Wishlist() {


const [data, setData] = useState <ListResponse|null> (null)
const [loading, setLoading] = useState (false)
const [error, setError] = useState ("")

useEffect(()=>{
  const WishlistProduct = async () => {
    setLoading(true)
    try{
      const response = await fetch ("https://dummyjson.com/products")
      if (!response.ok){
        throw new Error ("Something went wrong")
      }
      const data = await response.json()
      setData(data)
      console.log(data);
    } catch (error: unknown){
      setError(error?.message)
      console.log(error);
    } finally{
      setLoading(true)
    }
      
  }
  WishlistProduct()
}, [])

  return (
    <div>
      <div className="Wrapper">
          <Navbar/>

        <div className="space-y-12 pb-30">
         <section>
           <div className="flex items-center justify-between py-15">
            <h3 className="font-poppins font-normal text-[20px] leading-6">Wishlist (4)</h3>
            <button className="w-[223PX] h-14 border rounded-sm  font-poppins font-medium text-base leading-6">
              Move All To Bag
            </button>
          </div>

          <div className="flex items-center justify-between">
            {data?.products.slice (20, 24).map(WishlistDetailsData=>(
              <div key={WishlistDetailsData.id} className="">
                <section className="wrapper relative w-[270px] h-[250px] bg-[#f5f5f5] mb-3">
                  <div>
                   <Link to = {`/product/${WishlistDetailsData.id}`}>
                    <img src={WishlistDetailsData.thumbnail} alt={WishlistDetailsData.title} className="absolute inset-0 m-auto w-[190px] h-[180px]"/>
                   </Link>
                  </div>
                  
                      <div className=" flex justify-between item- w-full absolute top-3 p-3">
                        <button>
                          <img
                            src={DeleteBtn}
                            alt=""
                            className="ml-auto cursor-pointer"
                          />
                        </button>
                      </div>

                      <div className="group">
               {WishlistDetailsData && (
                <p className=" group-hover:hover  absolute w-full h-10 flex bottom-0 rounded-br-sm rounded-bl-sm items-center justify-center text-white bg-[black]">
                  Add To Cart
                </p>
               )}
            </div> 
                </section>
                <div className="space-y-3">
                
                  <div className="font-poppins font-medium text-base leading-6">
                    {WishlistDetailsData.title}
                    </div>
                <div className="flex gap-3">
                    <p className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445]">{WishlistDetailsData.price}
                  </p>
                  <p className="line-through font-poppins font-medium text-[16px] leading-6 ">{WishlistDetailsData.price}
                  </p>
                </div>
                
                
                   <div className='flex gap-3'>
                        {[1,2,3,4,5].map((star)=>{
                            const rating = WishlistDetailsData.rating
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


          <section className="">
            <div className="flex items-center justify-between py-15">
           <div className="space-x-5 flex items-center justify-center">
             <div className="w-5 h-10 bg-[#dB4444] rounded-b-sm"></div>
            <h3 className="font-poppins font-normal text-[20px] leading-6 ">Just For You</h3>
           </div>
            <button className="w-[150PX] h-14 border rounded-sm font-poppins font-medium text-base leading-6">
              See All
            </button>
          </div>

          <div className="flex items-center justify-between">
            {data?.products.slice (25, 29).map(WishlistDetailsData=>(
              <div key={WishlistDetailsData.id} className="">
                <section className="wrapper relative w-[270px] h-[250px] bg-[#f5f5f5] mb-3">
                  <div>
                

                   <Link to = {`/product/${WishlistDetailsData.id}`}>
                    <img src={WishlistDetailsData.thumbnail} alt={WishlistDetailsData.title} className="absolute inset-0 m-auto w-[190px] h-[180px] " />
                   </Link>
                  </div>
                  
                      <div className=" flex justify-between item- w-full absolute top-3 p-3">
                        <button>
                          <img
                            src={DeleteBtn}
                            alt=""
                            className="ml-auto cursor-pointer"
                          />
                        </button>
                      </div>
                </section>
                <div className="space-y-3">
                <div className="font-poppins font-medium text-base leading-6">
                  {WishlistDetailsData.title}
                   </div>
                  <div className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445]">{WishlistDetailsData.price}</div>
               
                 <div className='flex gap-3'>
                        {[1,2,3,4,5].map((star)=>{
                            const rating = WishlistDetailsData.rating
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
         


        </div>
        
         

          
        </div>
      
      <Footer />
    </div>
  );
}

export default Wishlist;
