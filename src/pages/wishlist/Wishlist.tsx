
import Footer from "../../Component/Layout/Footer";
import { WishlistData } from "../../constants/List";
import DeleteBtn from "../../assets/DeleteBtn.svg";
import Cart_icon from "../../assets/Cart1.svg";

import { WishlistSectionData } from "../../constants/WishlistSection";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Navbar from "../../Component/Layout/Navbar";

function Wishlist() {
  return (
    <div>
      <div className="Wrapper">
        <Navbar />

        <div>
          <div className="flex items-center justify-between py-15">
            <h3>Wishlist (4)</h3>
            <button className="w-[223PX] h-14 border rounded-sm ">
              Move All To Bag
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 space-y-24">
            {WishlistData.map(
              ({ id, title, price, oldPrice, image, percent, bgpercent }) => (
                <section
                  key={id}
                  className="w-[270px] h-[250px] bg-secondary rounded-xl p-4
                       flex flex-col items-center justify-between relative text-start"
                >
                  <div className="">
                    <div className="relative w-full h-[250px] flex items-center  justify-center">
                      <img
                        src={image}
                        className="max-w-full max-h-[200px] items-center justify-center "
                      />

                      <div className=" flex justify-between item- w-full absolute top-3 right-3">
                        {percent && (
                          <p
                            className={`w-[55px] h-[26px] rounded-md flex items-center justify-center text-white
      ${bgpercent ? "bg-[#DB4445]" : "bg-transparent"}`}
                          >
                            {percent}
                          </p>
                        )}

                        <button>
                          {" "}
                          <img
                            src={DeleteBtn}
                            alt=""
                            className="ml-auto cursor-pointer"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="w-full h-12  absolute -bottom-6 left-0 ">
                      <div className="items-center justify-center flex gap-2 text-start p-2 bg-black">
                        <img src={Cart_icon} alt="" className="size-6" />
                        <h3 className="text-white font-poppins font-normal text-[12px] leading-4">
                          Add to cart
                        </h3>
                      </div>
                    </div>

                    <div className="font-poppins font-medium text-[16px] leading-6 text-black ">
                      {title}
                    </div>
                    <div className="flex gap-5  ">
                      <span className="text-[#df4242]">{price}</span>
                      <span className="line-through text-[#df4242]">
                        {oldPrice}
                      </span>
                    </div>
                  </div>
                </section>
              )
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between py-15">
            <h3>Just For You</h3>
            <button className="w-[150PX] h-14 border rounded-sm ">
              See All
            </button>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 space-y-24 pb-6">
            {WishlistSectionData.map(
              ({
                id,
                title,
                price,
                oldPrice,
                rating,
                reviews,
                image,
                percent,
                bgpercent,
              }) => (
                <section
                  key={id}
                  className="w-[270px] h-[250px] bg-secondary rounded-xl 
                       flex flex-col justify-between relative space-y-12"
                >
                  <div className="">
                    <div className="relative w-full h-[250px] flex items-center justify-center">
                      <img
                        src={image}
                        className="max-w-full max-h-[120px] items-center justify-center "
                      />

                      <div className=" flex justify-between w-full absolute top-3 right-3">
                        {percent && (
                          <p
                            className={`w-[55px] h-[26px] rounded-md flex items-center justify-center text-white
      ${bgpercent ? "bg-[#DB4445]" : "bg-transparent"}`}
                          >
                            {percent}
                          </p>
                        )}

                        <button>
                          {" "}
                          <img
                            src={DeleteBtn}
                            alt=""
                            className="ml-auto cursor-pointer"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="w-full h-12  absolute -bottom-6  left-0 ">
                      <div className="items-center justify-center flex gap-2 text-start p-2 bg-black">
                        <img src={Cart_icon} alt="" className="size-6" />
                        <h3 className="text-white font-poppins font-normal text-[12px] leading-4">
                          Add to cart
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="font-poppins font-medium text-[16px] leading-6 text-black ">
                      {title}
                    </div>
                    <div className="flex gap-5  ">
                      <span className="text-[#df4242]">{price}</span>
                      <span className="line-through text-[#df4242]">
                        {oldPrice}
                      </span>
                    </div>

                    <div className="flex gap-2 space-y-2">
                      {[1, 2, 3, 4, 5].map((star) =>
                        rating >= star ? (
                          <FaStar key={star} className="text-yellow-500" />
                        ) : rating >= star - 0.5 ? (
                          <FaStarHalfAlt
                            key={star}
                            className="text-yellow-500"
                          />
                        ) : (
                          <FaRegStar key={star} className="text-gray-400" />
                        )
                      )}

                      <span className="ml-2 text-sm text-gray-600">
                        ({reviews})
                      </span>
                    </div>
                  </div>
                </section>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Wishlist;
