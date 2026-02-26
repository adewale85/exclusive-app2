import { browseByCategoryData } from "../../../constants/category";



const BrowseByCategory = () => {
  return (
    <div className="mt-12 Wrapper px-5  ">
      <div className='flex gap-3 items-center md:mb-5 mb-2'>
        <div className='lg:w-5 w-3 lg:h-10 h-8 bg-red-500 rounded-md'></div>
        <div className='font-poppins font-semibold text-[16px] leading-5 text-[#db4444]'> Categories</div>  
        </div> 
      <h2 className="font-inter font-semibold md:text-4xl text-2xl mb-12 text-left">Browse By Category</h2>

    <div className="Wrapper grid md:grid-cols-6 grid-cols-2 items-center justify-center gap-6 ">
        {browseByCategoryData?.map(({ id, title, image, active }) => (
  <div
  key={id}
  className={`border border-x-slate-400 shadow-sm rounded-sm lg:w-[170px] w-full h-[145px] flex gap-5 items-center justify-center
    transition-all duration-300
      hover:bg-red-500 hover:border-red-500
    ${active ? "bg-red-500 text-white" : "bg-white"}`}
>
<div className="items-center flex flex-col justify-center">
    <img src={image} alt={title} className="w-12 h-12 " />
  <p className="font-poppins font-normal text-[16px] leading-6 ">{title}</p>
</div>
</div>

))} 
    </div>
  <div className="border-b-[0.5px] my-24"></div>
    </div>
  );
};

export default BrowseByCategory;
