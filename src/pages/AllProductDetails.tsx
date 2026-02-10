
import Navbar from "../Component/Layout/Navbar";


import ElipseBlackBlue from "../assets/ElipseBlackBlue.svg";
import ElipseRed from "../assets/EllipseRed.svg";
import Love_Vector from "../assets/Love_Vector.svg";
import Delivery_Icon from "../assets/icon-delivery.svg";
import Return_Delivery from "../assets/Icon-return.svg";
import star_Icon from "../assets/Star.svg";
import HalfStar from "../assets/star-half-filled.svg";

import Myproducts from "../Component/Layout/Myproducts";
import Footer from "../Component/Layout/Footer";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AllProductDetails() {
 
  const {id} = useParams ()
  const [product, setProduct] = useState (null)
  const [loading, setLoading] = useState (false)
  const [error, setError] = useState ("")

  useEffect (() =>{
    const myProductsInformation = async () => {
      setLoading (true)
     try {
      const response = await fetch (`https://dummyjson.com/products/${id}`)
      if(!response.ok) {
        throw new Error ("Somethin went wrong")
      } const data = await response.json ()
      setProduct(data)
      // console.log(product);  
    } catch (error:unknown){
      setError(error?.message)
      console.log(error);
    } finally{
      setLoading(false)
    }
  }
  myProductsInformation()
  }, [id] )

if (loading) return <div className="text-center py-20">Loading product...</div>;
if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
if (!product) return null; // This prevents the "null" error

  return (
    <div>
      <Navbar />
      <div className="Wrapper ">
        <div className="flex gap-12 py-22">
          <p className="font-poppins font-normal text-[14px] leading-5 opacity-50">
            Account /
          </p>
          <p className="font-poppins font-normal text-[14px] leading-5 opacity-50">
            Gaming /
          </p>
          <p className="font-poppins font-normal text-[14px] leading-5">
           {product.title}
          </p>
        </div>

        <div className="flex gap-12">
          <div className="space-y-4 ">
           {product.images?.slice (0,4).map((img, index)=>(
            <div key={index} className="w-[170px] h-[138px] bg-[#f5F5F5] rounded-sm flex items-center justify-center">
              <img src={img} alt="" className="w-[121px] h-[114px]"/>
            </div>
            
           ))}
           </div>
          <div className="w-[500px] h-[600px] bg-[#f5F5F5] rounded-sm flex items-center justify-center">
            <img src={product.thumbnail} alt="product.title" className=""/>
          </div>
           
    
          <div className="">
            
              <section >
                <div className="space-y-4">
                 <h2 className="font-inter font-semibold text-2xl leading-6 tracking-[3]">
              {product.title}
            </h2>
             <p className="font-poppins font-normal text-[14px] leading-5 border-b pb-5 w-[373px]">{product.description}</p>
            <div className="flex gap-3 ">
          
              {[1,2,3,4,5].map((star)=>{
                const rating = product.rating
                if (rating >= star){
                  return <img src={star_Icon} alt="" />
                }else if (rating >=star - 0.5){
                  return <img src={HalfStar} alt="" />
                }
              })}
             
              <p className="font-poppins font-normal text-[14px] leading-5 ">
                {product.review}
              </p>
                <div className="flex items-center justify-center gap-5">
                  <span className="text-black ">|</span>
                <p className="font-poppins font-normal text-[14px] leading-5 text-[#00FF66]">{product.stock} </p>
                <span>In stock</span> 
                </div>
            </div>
              <p className="font-inter font-normal text-[24px] leading-6 tracking-[3%] ">
                {product.price}
              </p>
                </div>
              </section>
          
             
             <div className="space-y-6 py-5">
            <div className="flex gap-7 ">
              <p className="gap-5 font-inter font-normal text-[20px] leading-5 ">
                Colours:
              </p>
              <div className="flex gap-2">
                <img src={ElipseBlackBlue} alt="" />
                <img src={ElipseRed} alt="" />
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <h3 className="font-inter font-normal text-[20px] leading-5">
                Size:
              </h3>
              <div className="flex gap-5">
                <div className="size-8 border rounded-sm font-medium font-poppins text-sm leading-5 flex items-center justify-center">
                  XS
                </div>
                <div className="size-8 border rounded-sm font-medium font-poppins text-sm leading-5 flex items-center justify-center">
                  S
                </div>
                <div className="size-8  rounded-sm font-medium font-poppins text-sm leading-5 bg-[#Db4444] flex items-center justify-center text-white">
                  M
                </div>
                <div className="size-8 border rounded-sm font-medium font-poppins text-sm leading-5 flex items-center justify-center">
                  L
                </div>
                <div className="size-8 border rounded-sm font-medium font-poppins text-sm leading-5 flex items-center justify-center">
                  XL
                </div>
              </div>
            </div>

            <div className="flex gap-5 ">
              <div className="flex">
                <div className="w-10 h-11 border flex items-center justify-center font-poppins font-medium text-[20px] leading-7 rounded-l-sm">
                  -
                </div>
                <div className="w-20 h-11 border flex items-center justify-center font-poppins font-medium text-[20px] leading-7">
                  2
                </div>
                <div className="w-10 h-11  flex items-center justify-center font-poppins font-medium text-[20px] text-white leading-7 bg-[#Db4444] rounded-r-sm">
                  +
                </div>
              </div>

              <div className="flex gap-5">
                <button className="w-[165px] h-11 bg-[#Db4444] text-white rounded-sm">
                  Buy Now
                </button>
                <div className="size-10 rounded-sm border flex items-center justify-center">
                  <img src={Love_Vector} alt="" />
                </div>
              </div>
            </div>

            <div className="w-[401px] h-[180px] rounded-sm border flex flex-col items-center justify-center space-y-5 ">
              <div className="flex gap-5 border-b p-6">
                <img src={Delivery_Icon} alt="" />
                <div className="w-[332px] ">
                  <h2 className="font-poppins font-medium text-sm leading-6">
                    Free Delivery
                  </h2>
                  <p className="font-medium font-poppins text-[12px] leading-4 ">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              <div className="flex gap-5 p-4">
                <img src={Return_Delivery} alt="" />
                <div className="w-[332px] ">
                  <h2 className="font-poppins font-medium text-sm leading-6">
                    Return Delivery
                  </h2>
                  <p className="font-medium font-poppins text-[12px] leading-4  ">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>

          
        </div>

        <div className="py-22">
          <div className="flex gap-3 items-center py-12">
            <div className="w-5 h-10 bg-red-500 rounded-md"></div>
            <p className="font-poppins font-semibold text-base leading-5">
              Related Item
            </p>
          </div>
          <Myproducts />
        </div>
      </div>
      <div className="">
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default AllProductDetails;
