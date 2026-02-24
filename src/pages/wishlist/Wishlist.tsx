


import DeleteBtn from "../../assets/DeleteBtn.svg";
import StarIcon from "../../assets/Star.svg"
import halfIcon from "../../assets/star-half-filled.svg"
import emptyIcon from "../../assets/EmptyStar.svg"

import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";
import { toast } from "sonner";
import { useWishList } from "../../WishListContext";
import { useEffect, useState } from "react";



function Wishlist() {
 const {wishList,removeFromWishList} = useWishList()
 const {addToCart} = useCart ()


if (wishList.length===0){
  return (
    <div className="Wrapper px-4 py-20 text-center">
      <h2 className="text-2xl font-bold">
        Your Wishlist is empty
      </h2>
     <Link to="/">
      <button className="mt-6 px-6 py-3 bg-[#Db4444] text-white rounded-md">
        Add Favorite product
      </button>
     </Link>
    </div>
  )
}
  

const [data, setData] = useState (null)
const [loading, setLoading] = useState (false)
const [error, setError] = useState ("")

const handleAddCart = (product) =>{
  if(product) {
    addToCart(product)
    toast.success(`${product.title} added to cart!`)
  }
}


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
      setLoading(false)
    }
  }
  WishlistProduct()
}, [])

  return (
    <main className="Wrapper lg:px-0 px-4 ">
      <div className="">
          

        <div className="space-y-12 pb-30">

         <section>
           <div className="flex flex-row items-center justify-between py-15">
            <h3 className="font-poppins font-normal lg:text-[20px] text-[15px] leading-6">Wishlist (4)</h3>
            <button className="lg:w-[223PX] w-40 h-14 border rounded-sm font-poppins lg:font-medium font-normal text-base leading-6">
              Move All To Bag
            </button>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-12 ">
            {wishList.map((product)=>(
              <div key={product.id} className=" ">
                <section className="relative lg:w-[270px] w-full mx-auto h-[250px] bg-[#f5f5f5] mb-3">
                  <div>
                   <Link to = {`/product/${product.id}`}>
                    <img src={product.thumbnail} alt={product.title} className="absolute inset-0 m-auto w-[190px] h-[180px] object-contain"/>
                   </Link>
                  </div>
                  
                      <div className=" flex justify-between w-full absolute top-3 p-3">
                        <button onClick={()=>removeFromWishList(product.id)}>
                          <img
                            src={DeleteBtn}
                            alt=""
                            className="ml-auto cursor-pointer"
                          />
                        </button>
                      </div>

              <div className="group">
               {product && (
                <button onClick={()=>handleAddCart(product)}>
                  <p className=" group-hover:hover  absolute w-full h-10 flex bottom-0 rounded-br-sm rounded-bl-sm items-center justify-center text-white bg-[black]">
                  Add To Cart
                </p>
                </button>
               )}
            </div> 
                </section>
                <div className=" space-y-3 lg:pl-4 ">
              
                  <div className="font-poppins font-medium text-base leading-6 ">
                    {product.title}
                    </div>
                <div className="flex gap-3">
                    <p className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445]">{product.price}
                  </p>
                  <p className="line-through font-poppins font-medium text-[16px] leading-6 ">{product.price}
                  </p>
                </div>
                
                
                   <div className='flex gap-3'>
                        {[1,2,3,4,5].map((star)=>{
                            const rating = product.rating
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
         <section>
           <div className="flex flex-row items-center justify-between py-15">
            <div className="flex gap-3 items-center justify-center">
            <span className="w-5 h-10 bg-red-500 rounded-sm"></span>
            <h3 className="font-poppins font-normal lg:text-[20px] text-[15px] leading-6">Just For You</h3>
            </div>
              <button className="lg:w-[223PX] w-40 h-14 border rounded-sm font-poppins lg:font-medium font-normal text-base leading-6">
              See All
            </button>
            
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-12 ">
            {data?.products.slice (25, 29).map(product=>(
              <div key={product.id} className="">
                <section className="relative lg:w-[270px] w-full h-[250px] bg-[#f5f5f5] mb-3">
                  <div>
                   <Link to = {`/product/${product.id}`}>
                    <img src={product.thumbnail} alt={product.title} className="absolute inset-0 m-auto lg:w-[190px] w-full h-[180px] object-contain"/>
                   </Link>
                  </div>
                  
                      <div className=" flex justify-between w-full absolute top-3 p-3">
                        <button>
                          <img
                            src={DeleteBtn}
                            alt=""
                            className="ml-auto cursor-pointer"
                          />
                        </button>
                      </div>

              <div className="group">
               {product && (
                <button onClick={()=>handleAddCart(product)}>
                  <p className=" group-hover:hover  absolute w-full h-10 flex bottom-0 rounded-br-sm rounded-bl-sm items-center justify-center text-white bg-[black]">
                  Add To Cart
                </p>
                </button>
               )}
            </div> 
                </section>
                <div className=" space-y-3 pl-15 md:pl-4 ">
                
                  <div className="font-poppins font-medium text-base leading-6 ">
                    {product.title}
                    </div>
                <div className="flex gap-3">
                    <p className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445]">{product.price}
                  </p>
                  <p className="line-through font-poppins font-medium text-[16px] leading-6 ">{product.price}
                  </p>
                </div>
                
                
                   <div className='flex gap-3'>
                        {[1,2,3,4,5].map((star)=>{
                            const rating = product.rating
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
    
    </main>
  );
}

export default Wishlist;





