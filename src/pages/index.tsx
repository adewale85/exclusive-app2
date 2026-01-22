import BestSellingProducts from "../Component/Product/homepages/BestSellingProducts";
import BrowseByCategory from "../Component/Product/homepages/BrowseByCategory";
import EhanceYourMusicExperience from "../Component/Product/homepages/EhanceYourMusicExperience";
import ExploreOurProducts from "../Component/Product/homepages/ExploreOurProducts";

import NewArrival from "../Component/Product/homepages/NewArrival";
import Sidebar from "../Component/Layout/Sidebar";
import FlashShare from "../Component/Product/homepages/FlashShare";

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
