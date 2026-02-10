
// import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function SidebarCategoryDetails() {

 

// export interface categories {
//   slug: string
//   name: string
//   url: string
// }

 

 const categories = [
    
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    
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
    <div className="w-[214px] h-[314px]">
      <div className="border-r-[0.5px]">
        <ul className=" space-y-3 ">
          {categories.map((category, index) => (
            <li
              key={category}
              className="flex items-center justify-between font-normal font-poppins text-[1rem] leading-6 w-[197px]"
            >
              {category}
              {index <= 1 && (
                <MdOutlineKeyboardArrowRight className="w-6 h-6" />
              )}
            </li>
          ))}
        </ul>
       
      </div>
    </div>
  );
}

export default SidebarCategoryDetails;
