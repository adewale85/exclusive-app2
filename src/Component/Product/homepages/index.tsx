import BestSellingProducts from "./BestSellingProducts";
import BrowseByCategory from "./BrowseByCategory";
import EhanceYourMusicExperience from "./EhanceYourMusicExperience";
import ExploreOurProducts from "./ExploreOurProducts";

import NewArrival from "./NewArrival";
import Sidebar from "../../Layout/Sidebar";
import FlashShare from "./FlashShare";

function Homepages() {
  return (
    <>
      <Sidebar />
      <FlashShare />
      <BrowseByCategory />
      <BestSellingProducts />
      <EhanceYourMusicExperience />
      <ExploreOurProducts />
      <NewArrival />
    </>
  );
}

export default Homepages;
