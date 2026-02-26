import { type Exploreprops } from "../../../constants/Explore";
import Heart from "../../../assets/Fill Heart.svg";
import Eye from "../../../assets/Fill Eye.svg";

import StarIcon from "../../../assets/Star.svg";
import halfIcon from "../../../assets/star-half-filled.svg";
import emptyIcon from "../../../assets/EmptyStar.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../CartContext";
import { toast } from "sonner";
import { useWishList } from "../../../WishListContext";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  description?: string;
}

const ExploreOurProducts = () => {
  const { addToWishList } = useWishList();
  const { addToCart } = useCart();
  const [data, setData] = useState<Exploreprops | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleToggleWishList = (product: Product) => {
    addToWishList(product);
    toast.success(`${product.title} added to wishlist`);
  };

  const handleAddCart = (product: Product) => {
    if (product) {
      addToCart(product);
      toast.success(`${product.title} added to cart!`);
    }
  };

  useEffect(() => {
    const ExploreProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    ExploreProduct();
  }, []);

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <section className="Wrapper lg:px-0 px-4">
      
      <div className="flex gap-3 items-center">
        <div className="lg:w-5 w-3 lg:h-10 h-8 bg-red-500 rounded-md"></div>
        <div className="font-poppins font-semibold text-[16px] leading-5 text-[#db4444]">
          Our products
        </div>
      </div>
      
      <h2 className="font-inter font-semibold md:text-[36px] text-2xl leading-12 tracking-[4%] md:my-6 my-3 mb-24">
        Explore Our Products
      </h2>

      {/* First row */}
      <div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-35 pb-40">
        {data?.products.slice(10, 14).map((product: Product) => (
          <div key={product.id} className="Wrapper relative lg:w-[270px] w-full h-[250px] bg-[#f5f5f5] mb-3">
            <section className="relative lg:w-[270px] w-full h-[250px] bg-[#f5f5f5] mb-3">
              <div className="flex justify-between p-2 relative z-40">
                <div className="flex flex-col space-y-2">
                  <button onClick={() => handleToggleWishList(product)}>
                    <img src={Heart} alt="Add to wishlist" className="w-8 h-8" />
                  </button>
                  <img src={Eye} alt="View product" className="w-8 h-8" />
                </div>
              </div>

              <div className="absolute inset-0 m-auto lg:w-[190px] w-full h-[180px]">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="lg:w-[190px] w-full h-[180px]"
                  />
                </Link>
              </div>

              {product.description && (
                <button onClick={() => handleAddCart(product)}>
                  <p className="absolute w-full h-10 flex bottom-0 rounded-br-sm rounded-bl-sm items-center justify-center text-white bg-[black]">
                    Add To Cart
                  </p>
                </button>
              )}
            </section>

            <div className="space-y-2">
              <div className="font-poppins font-medium text-base leading-6">{product.title}</div>
              <div className="space-x-5">
                <span className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445]">
                  {product.price}
                </span>
                <span className="line-through font-poppins font-medium text-[16px] leading-6">
                  {product.price}
                </span>
              </div>

              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((star) => {
                  const rating = product.rating;
                  if (rating >= star) return <img key={star} src={StarIcon} alt="star" />;
                  if (rating >= star - 0.5) return <img key={star} src={halfIcon} alt="half star" />;
                  return <img key={star} src={emptyIcon} alt="empty star" />;
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second row */}
      <div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-35 lg:pb-40 pb-40">
        {data?.products.slice(15, 19).map((product: Product) => (
          <div key={product.id} className="Wrapper relative lg:w-[270px] w-full h-[250px] bg-[#f5f5f5] mb-3">
            <section className="relative lg:w-[270px] w-full h-[250px] bg-[#f5f5f5] mb-3">
              <div className="flex justify-between p-2 relative z-40">
                <div className="flex flex-col space-y-2">
                  <button onClick={() => handleToggleWishList(product)}>
                    <img src={Heart} alt="Add to wishlist" className="w-8 h-8" />
                  </button>
                  <img src={Eye} alt="View product" className="w-8 h-8" />
                </div>
              </div>

              <div className="absolute inset-0 m-auto lg:w-[190px] w-full h-[180px]">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="lg:w-[190px] w-full h-[180px]"
                  />
                </Link>
              </div>

              {product.description && (
                <button onClick={() => handleAddCart(product)}>
                  <p className="absolute w-full h-10 flex bottom-0 rounded-br-sm rounded-bl-sm items-center justify-center text-white bg-[black]">
                    Add To Cart
                  </p>
                </button>
              )}
            </section>

            <div className="space-y-2">
              <div className="font-poppins font-medium text-base leading-6">{product.title}</div>
              <div className="space-x-5">
                <span className="font-poppins font-medium text-[16px] leading-6 text-[#DB4445]">
                  {product.price}
                </span>
                <span className="line-through font-poppins font-medium text-[16px] leading-6">
                  {product.price}
                </span>
              </div>

              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((star) => {
                  const rating = product.rating;
                  if (rating >= star) return <img key={star} src={StarIcon} alt="star" />;
                  if (rating >= star - 0.5) return <img key={star} src={halfIcon} alt="half star" />;
                  return <img key={star} src={emptyIcon} alt="empty star" />;
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Link to="/EveryProduct">
          <button className="w-[234px] h-14 bg-primary rounded-sm text-white text-[16px] font-medium leading-6 font-poppins">
            View All Products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ExploreOurProducts;