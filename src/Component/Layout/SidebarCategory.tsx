
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function SidebarCategoryDetails() {
  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    " Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];
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
