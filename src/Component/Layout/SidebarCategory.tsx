
// import { useEffect, useState } from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFilterList, MdOutlineKeyboardArrowRight } from "react-icons/md";

function SidebarCategoryDetails() {
 const [isOpen, setIsOpen] = useState (false)

 const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "women-shoes",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    
  ];

  // const [data, setData] = useState <categories|null> (null)
  // const [loading, setLoading] = useState (false)
  // const [error, setError] = useState ("")

  // useEffect (()=>{
  //   const categoriesDetails = async () => {
  //     setLoading(true)
   
  //   try{
  //     const response = await fetch ("dummyjson.com/products/category-list")
  //     if (!response.ok) {
  //       throw new Error ("something went wrong")
  //     }
  //     const data = await response.json
  //     setData (data)
  //     console.log(data);
      
  //   }catch  (error:unknown){
  //     setError(error?.message)
  //     console.log(error);
  //     } finally {
  //       setLoading(false)
  //     }
      
  //  }
  //  categoriesDetails() 
  // },[])


  return (
  <div className="lg:w-[214px] w-[300px] h-[314px] lg:relative absolute z-50">
  <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden block">
    {isOpen ? < IoMdClose className="size-8 bg-white "/> : <MdOutlineFilterList className="size-8 bg-white "/>}
  </button>


    <div className={`lg:border-r-[0.5px]  ${isOpen ? "block" : "hidden"} lg:block overflow-y-auto lg:bg-[#ffffff] bg-[#F5F5f5] z-50 lg:p-4 p-5 lg:gap-12 gap-2`}>
    <ul className="space-y-3 ">
      {categories.map((category, index) => (
        <li
          key={category}
          className="flex items-center pr-15 gap-5 justify-between font-normal font-poppins text-[1rem] leading-6 w-[197px]"
        >
          {category}
          {index <= 1 && (
            <MdOutlineKeyboardArrowRight className="w-6 h-6"/>
          )}
        </li>
      ))}
    </ul>
  </div>
  </div>

    



    // <div>
    //   <li className="lg:hidden">
    //     <button onClick={()=>setIsOpen(!isOpen)}>
    //   {isOpen ? <MdOutlineFilterList/> : <IoMdClose/> }
    //   </button>
    //   </li>
    // </div>

    // <div className="w-[214px] h-[314px] ">
    //   <button onClick={()=>setIsOpen(!isOpen)} className="lg:hidden block">
    //   {isOpen ? <MdOutlineFilterList /> : 
      
    //     <div className="border-r-[0.5px]">
    //     <ul className={` space-y-3 ${`isOpen ? 
    //       ${categories.map((category, index) => (
    //         <li
    //           key={category}
    //           className="flex items-center justify-between font-normal font-poppins text-[1rem] leading-6 w-[197px]"
    //         >
    //           {category}
    //           {index <= 1 && (
    //             <MdOutlineKeyboardArrowRight className="w-6 h-6" />
    //           )}
    //         </li>
    //       ))}
    //       `}`}>
          
    //     </ul>
       
    //   </div>
    //   }
    //   </button>
    
    // </div>


  );
}

export default SidebarCategoryDetails;
