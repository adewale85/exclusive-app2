

import Heart from "../../assets/Fill Heart.svg";
import Eye from "../../assets/Fill Eye.svg";
import StarIcon from "../../assets/Star.svg"
import halfIcon from "../../assets/star-half-filled.svg"
import emptyIcon from "../../assets/EmptyStar.svg"

import { useEffect, useState } from "react";
import type { ProductResponse } from "../../constants/Flash";

import { useCart } from "../../CartContext";
import { toast } from 'sonner';
import { Link } from "react-router-dom";
import { useWishList } from "../../WishListContext";



     
function Myproducts() {
    const {addToWishList} = useWishList()
    const {addToCart} = useCart()
    const [data, setData] = useState <ProductResponse|null>(null)
    const [loading, setLoading] = useState (false)
    const [error, setError] = useState ("")

    const handleToggleWishList = (product: any) => {
    addToWishList(product)
    toast.success(`${product.title} added to wishlist`)
  }

 
    // const handleToggleWishList = () => {
    //   if (isFavorite) {
    //     removeFromWishList(product.id)
    //   } else {
    //     addToWishList(product)
    //   }
    // }
    

const handleAddCart = (product: any) => {
  if (product) {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  }
};

    
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
    <main className="Wrapper lg:px-0 px-4">
        <div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-40 py-12">
        {data?.products.slice(0,4).map(flashShareData=>(
          <div key={flashShareData.id} className=" Wrapper relative w-[270px]  h-[250px] bg-[#f5f5f5] mb-3">
          

          <section className="Wrapper relative w-[270px] h-[250px] bg-[#f5f5f5] mb-3">
            
              
                <div className="flex justify-between p-2 relative ">
                  <div className="w-[3.438rem] h-6.5  bg-[#DB4445] rounded-lg text-white flex items-center justify-center text-[1rem] font-normal leading-4">
                   -40%
                  </div>

                <div className="flex flex-col space-y-2">
                   <button onClick={()=>handleToggleWishList (flashShareData)}>
                    <img src={Heart} alt="Add to wishlist" className="w-8 h-8" />
                    </button>
                    <img src={Eye} alt="" className="w-8 h-8" />
                </div>
                </div>

                <div className="absolute inset-0 m-auto lg:w-[190px] w-full h-[180px]">
                 <Link to = {`/product/${flashShareData.id}`}>
                  <img src={flashShareData.thumbnail} alt={flashShareData.title} className="lg:w-[190px] w-full h-[180px]   " />
                 </Link>
                </div> 

              <div className="group">
               {flashShareData && (
               <button onClick={()=>handleAddCart(flashShareData)}>
                <p className=" group-hover:hover  absolute w-full h-10 flex bottom-0 rounded-br-sm rounded-bl-sm items-center justify-center text-white bg-[black]">
                  Add To Cart
                </p>
               </button>
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
                                return <img src={StarIcon} alt="star" />
                            } else if (rating >=star-0.5){
                                return <img src={halfIcon} alt="half star" />
                            } else {
                               return <img src={emptyIcon} alt="empty star" />
                            }
                        })}
                        {/* <span>{flashShareData.reviews}</span> */}
                    </div>

             
              </div>
          </div>
        ))}

      </div>
    </main>
  )
}

export default Myproducts