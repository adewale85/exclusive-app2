
import Navbar from "../Component/Layout/Navbar";
import Pad1 from "../assets/Pad1.svg";
import Pad2 from "../assets/Pad2.svg";
import Pad3 from "../assets/Pad3.svg";
import Pad4 from "../assets/Pad4.svg";
import Pad from "../assets/Pad.svg";

import ElipseBlackBlue from "../assets/ElipseBlackBlue.svg";
import ElipseRed from "../assets/EllipseRed.svg";
import Love_Vector from "../assets/Love_Vector.svg";
import Delivery_Icon from "../assets/icon-delivery.svg";
import Return_Delivery from "../assets/Icon-return.svg";

import Myproducts from "../Component/Layout/Myproducts";
import Footer from "../Component/Layout/Footer";
import { ProductDetailsData } from "../constants/ProductDetails";
import { useEffect, useState } from "react";

function AllProductDetails() {
 
  const [data, setData] = useState (null)
  const [loading, setLoading] = useState (false)
  const [error, setError] = useState ("")

  useEffect (() =>{
    const myProductsInformation = async () => {
      setLoading (true)
     try {
      const response = await fetch ("https://dummyjson.com/products")
      if(!response.ok) {
        throw new Error ("Somethin went wrong")
      } const data = await response.json ()
      setData(data)
      console.log(data);  
    } catch (error:unknown){
      setError(error?.message)
      console.log(error);
    } finally{
      setLoading(false)
    }
  }
  myProductsInformation()
  }, [] )


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
            Havic HV G-92 Gamepad
          </p>
        </div>

        <div className="flex justify-between ">
          <div className="space-y-4">
            <div className="w-[170px] h-[138px] bg-[#f5F5F5] rounded-sm flex items-center justify-center">
              <img src={Pad1} alt="" />
            </div>
            <div className="w-[170px] h-[138px] bg-[#f5F5F5] rounded-sm flex items-center justify-center">
              <img src={Pad2} alt="" />
            </div>
            <div className="w-[170px] h-[138px] bg-[#f5F5F5] rounded-sm flex items-center justify-center">
              <img src={Pad3} alt="" />
            </div>
            <div className="w-[170px] h-[138px] bg-[#f5F5F5] rounded-sm flex items-center justify-center">
              <img src={Pad4} alt="" />
            </div>
          </div>

          <div className="w-[500px] h-[600px] bg-[#f5F5F5] rounded-sm flex items-center justify-center">
            <img src={Pad} alt="" />
          </div>

          <div className="">
            {ProductDetailsData.map(({id,title,subTitle,price, rating, image})=>(
              <section key={id}>
                <div className="space-y-6">
                 <h2 className="font-inter font-semibold text-2xl leading-6 tracking-[3]">
              {title}
            </h2>
             <p className="font-poppins font-normal text-[14px] leading-5 border-b pb-5 w-[373px]">{subTitle}</p>
            <div className="flex gap-3">
              {rating}
              <p className="font-poppins font-normal text-[14px] leading-5 opacity-50">
                {/* {review} */}

              </p>
              <p className="font-poppins font-normal text-[14px] leading-5 text-[#00FF66]">
                {price}
                <span className="text-black opacity-50">|</span> In Stock
              </p>
            </div>
                </div>
              </section>
            ))}
             
             <div className="space-y-6">
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
