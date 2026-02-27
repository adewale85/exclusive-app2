import Heart from "../../assets/Fill Heart.svg";
import Eye from "../../assets/Fill Eye.svg";
import StarIcon from "../../assets/Star.svg";
import halfIcon from "../../assets/star-half-filled.svg";
import emptyIcon from "../../assets/EmptyStar.svg";

import { useEffect, useState } from "react";
import type { ProductResponse } from "../../constants/Flash";

import { useCart } from "../../CartContext";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useWishList } from "../../WishListContext";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
}

function Myproducts() {
  const { addToWishList } = useWishList();
  const { addToCart } = useCart();

  const [data, setData] = useState<ProductResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleToggleWishList = (product: Product) => {
    addToWishList(product);
    toast.success(`${product.title} added to wishlist`);
  };

  const handleAddCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  useEffect(() => {
    const flashProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        // ✅ FIX 1: Properly typed API response
        const result: ProductResponse = await response.json();
        setData(result);
        console.log(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    flashProduct();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>;
  }

  return (
    <main className="Wrapper lg:px-0 px-4">
      <div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-40 py-12">
        {data?.products.slice(0, 4).map((flashShareData: Product) => (
          <div
            key={flashShareData.id}
            className="Wrapper relative lg:w-[270px] w-full h-[250px] bg-[#f5f5f5] mb-3"
          >
            <section className="Wrapper relative lg:w-[270px] w-full h-[250px] bg-[#f5f5f5] mb-3">
              <div className="flex justify-between p-2 relative ">
                <div className="w-[3.438rem] h-6.5  bg-[#DB4445] rounded-lg text-white flex items-center justify-center text-[1rem] font-normal leading-4">
                  -40%
                </div>

                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => handleToggleWishList(flashShareData)}
                  >
                    <img
                      src={Heart}
                      alt="Add to wishlist"
                      className="w-8 h-8"
                    />
                  </button>
                  <img src={Eye} alt="View product" className="w-8 h-8" />
                </div>
              </div>

              <div className="absolute inset-0 m-auto lg:w-[190px] w-full h-[180px]">
                <Link to={`/product/${flashShareData.id}`}>
                  <img
                    src={flashShareData.thumbnail}
                    alt={flashShareData.title}
                    className="lg:w-[190px] w-full h-[180px]"
                  />
                </Link>
              </div>

              {/* ✅ FIX 2: Removed unnecessary conditional */}
              <div className="group">
                <button onClick={() => handleAddCart(flashShareData)}>
                  {/* ✅ FIX 3: Correct Tailwind class */}
                  <p className="absolute w-full h-10 flex bottom-0 rounded-br-sm rounded-bl-sm items-center justify-center text-white bg-black">
                    Add To Cart
                  </p>
                </button>
              </div>
            </section>

            <div className="font-poppins font-medium text-[16px] leading-6 space-y-2">
              <div className="font-poppins font-medium text-base leading-6">
                {flashShareData.title}
              </div>

              <div className="space-x-5">
                <span className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445] ">
                  {flashShareData.price}
                </span>
                <span className="line-through font-poppins font-medium text-[16px] leading-6">
                  {flashShareData.price}
                </span>
              </div>

              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((star: number) => {
                  const rating = flashShareData.rating;

                  if (rating >= star) {
                    return <img key={star} src={StarIcon} alt="star" />;
                  } else if (rating >= star - 0.5) {
                    return <img key={star} src={halfIcon} alt="half star" />;
                  } else {
                    return <img key={star} src={emptyIcon} alt="empty star" />;
                  }
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Myproducts;