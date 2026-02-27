import ElipseBlackBlue from "../assets/ElipseBlackBlue.svg";
import ElipseRed from "../assets/EllipseRed.svg";
import Love_Vector from "../assets/Love_Vector.svg";
import Delivery_Icon from "../assets/icon-delivery.svg";
import Return_Delivery from "../assets/Icon-return.svg";
import star_Icon from "../assets/Star.svg";
import HalfStar from "../assets/star-half-filled.svg";
import Myproducts from "../Component/Layout/Myproducts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext";
import { toast } from "sonner";
import { useWishList } from "../WishListContext";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  rating: number;
  review?: string;
  thumbnail: string;
  images: string[];
}

function AllProductDetails() {
  const { addToWishList } = useWishList();
  const { addToCart } = useCart();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleToggleWishList = (product: Product) => {
    addToWishList(product);
    toast.success(`${product.title} added to wishlist`);
  };

  const handleAddCart = (product: Product) => {
    addToCart({ ...product, quantity });
    toast.success(`${product.title} added to cart!`);
  };

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error("Something went wrong");
        const data: Product = await response.json();
        setProduct(data);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Something went wrong");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center py-20">Loading product...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!product) return null;

  return (
    <div className="Wrapper lg:px-0 px-4 lg:py-12 lg:pb-0 pb-22">
      {/* Breadcrumb */}
      <div className="flex lg:gap-12 gap-5 py-22">
        {["Account /", "Gaming /", product.title].map((item, index) => (
          <p
            key={index}
            className={`font-poppins font-normal lg:text-[14px] text-[12px] leading-5 ${
              index < 2 ? "opacity-50" : ""
            }`}
          >
            {item}
          </p>
        ))}
      </div>

      {/* Product Images and Details */}
      <div className="flex lg:flex-row flex-col gap-12">
        {/* Thumbnails */}
        <div className="space-y-4">
          {product.images?.slice(0, 4).map((img, index) => (
            <div
              key={index}
              className="lg:w-[170px] w-40 lg:h-[138px] h-40 bg-[#f5F5F5] rounded-sm flex items-center justify-center"
            >
              <img src={img} alt={`thumbnail-${index}`} className="lg:w-[121px] w-20 lg:h-[114px] h-20" />
            </div>
          ))}
        </div>

        {/* Main Thumbnail */}
        <div className="lg:w-[500px] w-full lg:h-[600px] h-auto bg-[#f5F5F5] rounded-sm flex items-center justify-center">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        {/* Product Info */}
        <div className="lg:w-[399px] w-full">
          <section className="space-y-4">
            <h2 className="font-inter font-semibold text-2xl leading-6 tracking-[3]">{product.title}</h2>
            <p className="font-poppins font-normal text-[14px] leading-5 border-b pb-5 lg:w-[373px] w-full">
              {product.description}
            </p>

            {/* Rating and Stock */}
            <div className="flex gap-3 items-center">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => {
                  if (product.rating >= star) return <img key={star} src={star_Icon} alt="star" />;
                  if (product.rating >= star - 0.5) return <img key={star} src={HalfStar} alt="half star" />;
                  return <img key={star} src={HalfStar} alt="empty star" className="opacity-20" />;
                })}
              </div>
              {product.review && <p className="font-poppins font-normal text-[14px]">{product.review}</p>}
              <div className="flex items-center justify-center gap-5">
                <span className="text-black">|</span>
                <p className="font-poppins font-normal text-[14px] text-[#00FF66]">{product.stock}</p>
                <span>In stock</span>
              </div>
            </div>

            <p className="font-inter font-normal text-[24px] leading-6 tracking-[3%]">{product.price}</p>
          </section>

          {/* Color and Size */}
          <div className="space-y-6 py-5">
            <div className="flex gap-7">
              <p className="font-inter font-normal text-[20px]">Colours:</p>
              <div className="flex gap-2">
                <img src={ElipseBlackBlue} alt="black-blue" />
                <img src={ElipseRed} alt="red" />
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <h3 className="font-inter font-normal text-[20px]">Size:</h3>
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <div
                  key={size}
                  className={`size-8 border rounded-sm font-medium font-poppins text-sm leading-5 flex items-center justify-center ${
                    size === "M" ? "bg-[#Db4444] text-white" : ""
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>

            {/* Quantity and Cart */}
            <div className="flex gap-5">
              <div className="flex">
                <button
                  onClick={handleDecrease}
                  className="w-10 h-11 border flex items-center justify-center font-poppins font-medium text-[20px] rounded-l-sm"
                >
                  -
                </button>
                <div className="w-20 h-11 border flex items-center justify-center font-poppins font-medium text-[20px]">
                  {quantity}
                </div>
                <button
                  onClick={handleIncrease}
                  className="w-10 h-11 flex items-center justify-center font-poppins font-medium text-[20px] text-white bg-[#Db4444] rounded-r-sm"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleAddCart(product)}
                className="lg:w-[165px] w-[120px] h-11 bg-[#Db4444] text-white rounded-sm"
              >
                Add To Cart
              </button>

              <div className="size-10 rounded-sm border flex items-center justify-center">
                <button onClick={() => handleToggleWishList(product)}>
                  <img src={Love_Vector} alt="wishlist" />
                </button>
              </div>
            </div>

            {/* Delivery & Return */}
            <div className="lg:w-[401px] w-full lg:h-[180px] h-full rounded-sm border flex flex-col items-center justify-center space-y-5">
              <div className="flex gap-5 p-4">
                <img src={Delivery_Icon} alt="delivery" className="w-8"/>
                <div className="lg:w-[332px] w-[252px]">
                  <h2 className="font-poppins font-medium text-sm leading-6">Free Delivery</h2>
                  <p className="font-medium font-poppins text-[12px] leading-4">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="border w-full"></div>
              <div className="flex gap-5 p-6">
                <img src={Return_Delivery} alt="return delivery"className="w-8" />
                <div className="lg:w-[332px] w-[252px]">
                  <h2 className="font-poppins font-medium text-sm leading-6">Return Delivery</h2>
                  <p className="font-medium font-poppins text-[12px] leading-4">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="lg:py-22 py-0">
        <div className="flex gap-3 items-center lg:py-12 lg:pt-0 pt-12">
          <div className="lg:w-5 w-3 lg:h-10 h-6 bg-red-500 rounded-md"></div>
          <p className="font-poppins font-semibold text-base leading-5">Related Item</p>
        
        </div>
       
      </div>
      <Myproducts />
    </div>
  );
}

export default AllProductDetails;