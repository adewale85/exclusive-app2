import { BestSellingProductData } from "../../../constants/sellingProducts";
import Heart from '../../../assets/Fill Heart.svg'
import Eye from '../../../assets/Fill Eye.svg'

const BestSellingProducts = () => {
  return (
    <section className="mt-12 px-4 Wrapper ">
       <div className='flex gap-3 items-center mb-5'>
        <div className='w-[1.25rem] h-[2.5rem] bg-red-500 rounded-md'></div>
        <div className='font-poppins font-semibold text-[16px] leading-5 text-[#db4444]'>This Month</div>  
        </div> 
      <h2 className="font-inter font-semibold text-4xl leading-12 tracking-[4%] mb-12">Best Selling Products</h2>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {BestSellingProductData.map(({ id, title, price, oldPrice, image, rating, reviews }) => (
          <div>
          <section
            key={id}
            className="relative w-[270px] h-[250px] bg-secondary rounded-xl p-4
                       flex flex-col items-center justify-between"
          >
            
              <div className="absolute inset-0 m-auto w-[190px] h-[180px]">
                  <img src={image} alt="" className="w-[190px] h-[180px] " />
           
             </div>
               
            <div className=" flex flex-col gap-2  absolute top-3 right-3">
              <button className=" ">
               <img src={Heart} alt="" className='w-8 h-8' />
              </button>
              <button className=" ">
                <img src={Eye} alt=""  className='w-8 h-8'/>
              </button>
            
            </div>
           
          </section>
            <div className="w-full text-start my-3 mb-12">
            <div className="font-poppins font-medium text-[16px] leading-6 text-black ">{title}</div>
            <div className="flex gap-5">
            <span>{price}</span>
            <span className="line-through">{oldPrice}</span>
            </div>
            <div className="flex gap-3 items-center  py-2">
              <span><img src={rating} alt="" /></span>
              <span><img src={rating} alt="" /></span>
              <span><img src={rating} alt="" /></span>
              <span><img src={rating} alt="" /></span>
              <span><img src={rating} alt="" /></span>
              <span>{reviews}</span>
            </div>
            
            </div>
          </div>
          
        ))}
        
      </div>
    </section>
  );
};

export default BestSellingProducts; 
