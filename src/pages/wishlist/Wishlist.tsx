
import Footer from "../../Component/Layout/Footer";
import { type ListResponse } from "../../constants/List";
import DeleteBtn from "../../assets/DeleteBtn.svg";
import Cart_icon from "../../assets/Cart1.svg";

import { WishlistSectionData } from "../../constants/WishlistSection";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Navbar from "../../Component/Layout/Navbar";
import { useEffect, useState } from "react";


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
                    <img src={WishlistDetailsData.thumbnail} alt={WishlistDetailsData.title} className="absolute inset-0 m-auto w-[190px] h-[180px]"/>
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
                <div className="font-poppins font-medium text-base leading-6">
                  {WishlistDetailsData.title}
                  <div className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445]">{WishlistDetailsData.price}</div>
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
                    <img src={WishlistDetailsData.thumbnail} alt={WishlistDetailsData.title} className="absolute inset-0 m-auto w-[190px] h-[180px]"/>
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
                <div className="font-poppins font-medium text-base leading-6">
                  {WishlistDetailsData.title}
                  <div className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445]">{WishlistDetailsData.price}</div>
                </div>
              </div>
            ))} 
          </div>
          </section>
         

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 space-y-24">
            {WishlistData.map(
              ({ id, title, price, oldPrice, image, percent, bgpercent }) => (
                <section
                  key={id}
                  className="w-[270px] h-[250px] bg-secondary rounded-xl p-4
                       flex flex-col items-center justify-between relative text-start"
                >
                  <div className="">
                    <div className="relative w-full h-[250px] flex items-center  justify-center">
                      <img
                        src={image}
                        className="max-w-full max-h-[200px] items-center justify-center "
                      />

                      <div className=" flex justify-between item- w-full absolute top-3 right-3">
                        {percent && (
                          <p
                            className={`w-[55px] h-[26px] rounded-md flex items-center justify-center text-white
      ${bgpercent ? "bg-[#DB4445]" : "bg-transparent"}`}
                          >
                            {percent}
                          </p>
                        )}

                        <button>
                          {" "}
                          <img
                            src={DeleteBtn}
                            alt=""
                            className="ml-auto cursor-pointer"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="w-full h-12  absolute -bottom-6 left-0 ">
                      <div className="items-center justify-center flex gap-2 text-start p-2 bg-black">
                        <img src={Cart_icon} alt="" className="size-6" />
                        <h3 className="text-white font-poppins font-normal text-[12px] leading-4">
                          Add to cart
                        </h3>
                      </div>
                    </div>

                    <div className="font-poppins font-medium text-[16px] leading-6 text-black ">
                      {title}
                    </div>
                    <div className="flex gap-5  ">
                      <span className="text-[#df4242]">{price}</span>
                      <span className="line-through text-[#df4242]">
                        {oldPrice}
                      </span>
                    </div>
                  </div>
                </section>
              )
            )}
          </div> */}

        </div>
        
         

          
        </div>
      
      <Footer />
    </div>
  );
}

export default Wishlist;
