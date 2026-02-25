import { type Exploreprops } from "../../../constants/Explore";
import Heart from "../../../assets/Fill Heart.svg";
import Eye from "../../../assets/Fill Eye.svg";

import StarIcon from "../../../assets/Star.svg"
import halfIcon from "../../../assets/star-half-filled.svg"
import emptyIcon from "../../../assets/EmptyStar.svg"
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useCart } from "../../../CartContext";
import { toast } from "sonner";
import { useWishList } from "../../../WishListContext";


const ExploreOurProducts = () => {

const {addToWishList} = useWishList()
const {addToCart} = useCart()
const [data, setData] = useState <Exploreprops|null> (null)
const [loading, setLoading] = useState (false)
const [error, setError] = useState ("")

const handleToggleWishList = (product: any) =>{
  addToWishList(product)
  toast.success(`${product.title} added to wishlist`)
}

const handleAddCart = (product: any) =>{
  if(product) {
    addToCart (product);
    toast.success(`${product.title} added to cart!`)
  }
}


useEffect (()=>{
  const ExploreProduct = async () =>{
    setLoading(true)
    try{
      const response = await fetch ("https://dummyjson.com/products")
      if(!response.ok){
        throw new Error ("Something went wrong")
      } const data = await response.json()
        setData(data)
        console.log(data);     
    } catch (error:unknown){
      setError(error?.message)
    }finally{
      setLoading(false)
    }
  }
  ExploreProduct()
},[])

  return (
    <section className=" Wrapper lg:px-0 px-4  ">
      <div className='flex gap-3 items-center '>
        <div className='w-5 h-10 bg-red-500 rounded-md'></div>
        <div className='font-poppins font-semibold text-[16px] leading-5 text-[#db4444]'>Our products</div>  
        </div> 
      <h2 className="font-inter font-semibold md:text-[36px] text-2xl leading-12 tracking-[4%] md:my-6 my-3 mb-24">Explore Our Products</h2>
      <div className="pb-40 ">

      <div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-35 lg:pb-40 pb-0 ">
      {data?.products.slice(10,14).map (ExploreOurProductsData=>(
        <div key={ExploreOurProductsData.id} className="Wrapper relative lg:w-[270px] w-full  h-[250px] bg-[#f5f5f5] mb-3 ">
           
         <section className=" relative lg:w-[270px] w-full h-[250px] bg-[#f5f5f5] mb-3">
            
              
                <div className="flex justify-between p-2 relative  z-40">
                

                <div className="flex flex-col space-y-2">
                    <button onClick={()=>handleToggleWishList(ExploreOurProductsData)}>
                      <img src={Heart} alt="" className="w-8 h-8" />
                    </button>
                    <img src={Eye} alt="" className="w-8 h-8" />
                  </div>
                </div>

              <div className="absolute inset-0 m-auto lg:w-[190px] w-full h-[180px]">
                  <Link to = {`/product/${ExploreOurProductsData.id}`}>
                  <img src={ExploreOurProductsData.thumbnail} alt={ExploreOurProductsData.title} className="lg:w-[190px] w-full h-[180px] " />
                  </Link>
             </div> 

             <div className="">
               {ExploreOurProductsData.description && (
                <button onClick={()=>handleAddCart(ExploreOurProductsData)}>
                  <p className="absolute w-full h-10 flex bottom-0 rounded-br-sm rounded-bl-sm items-center justify-center  
                 text-white bg-[black] ">
                 <p> Add To Cart</p>
                </p>
                </button>
               )}
            </div>
            
            </section>

            
            <div className="space-y-2">
            <div className="font-poppins font-medium text-base leading-6">
               {ExploreOurProductsData.title}
            </div>
               <div className="space-x-5">
                  <span className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445] ">
                    {ExploreOurProductsData.price}
                  </span>
                  <span className="line-through font-poppins font-medium text-[16px] leading-6">
                     {ExploreOurProductsData.price}
                  </span>
                </div>

               

                <div className='flex gap-3'>
                        {[1,2,3,4,5].map((star)=>{
                            const rating = ExploreOurProductsData.rating
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


       <div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-35 ">
      {data?.products.slice(15,19).map (ExploreOurProductsData=>(
        <div key={ExploreOurProductsData.id} className="Wrapper relative lg:w-[270px] w-full  h-[250px] bg-[#f5f5f5] mb-3 ">
           
         <section className=" relative lg:w-[270px] w-full h-[250px] bg-[#f5f5f5] mb-3">
            
              
                <div className="flex justify-between p-2 relative  z-40">
                

                <div className="flex flex-col space-y-2">
                    <button onClick={()=>handleToggleWishList(ExploreOurProductsData)}>
                      <img src={Heart} alt="" className="w-8 h-8" />
                    </button>
                    <img src={Eye} alt="" className="w-8 h-8" />
                  </div>
                </div>

              <div className="absolute inset-0 m-auto lg:w-[190px] w-full h-[180px]">
                  <Link to = {`/product/${ExploreOurProductsData.id}`}>
                  <img src={ExploreOurProductsData.thumbnail} alt={ExploreOurProductsData.title} className="lg:w-[190px] w-full h-[180px] " />
                  </Link>
             </div> 

             <div className="">
               {ExploreOurProductsData.description && (
                <button onClick={()=>handleAddCart(ExploreOurProductsData)}>
                  <p className="absolute w-full h-10 flex bottom-0 rounded-br-sm rounded-bl-sm items-center justify-center  
                 text-white bg-[black] ">
                 <p> Add To Cart</p>
                </p>
                </button>
               )}
            </div>
            
            </section>

            
            <div className="space-y-2">
            <div className="font-poppins font-medium text-base leading-6">
               {ExploreOurProductsData.title}
            </div>
               <div className="space-x-5">
                  <span className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445] ">
                    {ExploreOurProductsData.price}
                  </span>
                  <span className="line-through font-poppins font-medium text-[16px] leading-6">
                     {ExploreOurProductsData.price}
                  </span>
                </div>

               

                <div className='flex gap-3'>
                        {[1,2,3,4,5].map((star)=>{
                            const rating = ExploreOurProductsData.rating
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

      
      <div className="flex items-center justify-center ">
        <Link to="/EveryProduct">
        <button  className="w-[234px] h-14 bg-primary rounded-sm text-white text-[16px] font-medium leading-6 font-poppins">View All Products</button>
        </Link>

      </div>
    </section>
  );
};

export default ExploreOurProducts;
