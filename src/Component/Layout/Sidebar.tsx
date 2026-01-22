
import Banner from "../../assets/Banner.svg";
import SidebarCategoryDetails from "./SidebarCategory";


function Sidebar() {
  return (
    <section className=" Wrapper mt-5 flex gap-16 pb-22">
          <SidebarCategoryDetails/>
          <div>
            <Banner/>
          </div>
      
    </section>
  );
}

export default Sidebar;
