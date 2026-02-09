import { browseByCategoryData } from "../../../constants/category";



const BrowseByCategory = () => {
  return (
    <div className="mt-12 Wrapper  ">
      <div className='flex gap-3 items-center mb-5'>
        <div className='w-5 h-10n bg-red-500 rounded-md'></div>
        <div className='font-poppins font-semibold text-[16px] leading-5 text-[#db4444]'> Categories</div>  
        </div> 
      <h2 className="font-inter font-semibold text-4xl mb-12 text-left">Browse By Category</h2>

    <div className="flex gap-6 ">
        {browseByCategoryData?.map(({ id, title, image, active }) => (
  <div
  key={id}
  className={`border border-x-slate-400 rounded-sm w-[170px] h-[145px] flex gap-5 items-center justify-center
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
