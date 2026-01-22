import CoatImg from "../assets/Cloth.svg";
import BagImg from "../assets/Gucci-Bag.svg";
import CoolerImg from "../assets/CPU cooler.svg";
import ShelfImg from "../assets/Bookself.svg";
import Star from "../assets/Star.svg"

export interface ProductProps {
  id: number;
  title: string;
  subTitle:  string;
  price: string;
  oldPrice?: string;
  image: string;
  rating: string;
  reviews: number;
}

export const BestSellingProductData: ProductProps[] = [
  {
    id: 1,
    title: "The north coat",
    subTitle: "Coat",
    price: "$260",
    oldPrice: "$360",
    image: CoatImg,
    rating: Star,
    reviews: (5),
  },
  
  {
    id: 2,
    title: "Gucci duffle bag",
    subTitle: "Coat",
    price: "$960",
    oldPrice: "$1160",
    image: BagImg,
    rating: Star,
    reviews: (65),
  },

  {
    id: 3,
    title: "RGB liquid CPU Cooler",
    subTitle: "Coat",
    price: "$160",
    oldPrice: "$170",
    image: CoolerImg,
    rating: Star,
    reviews: (75),
  },

  {
    id: 4,
    title: "Small BookSelf",
    subTitle: "Coat",
    price: "$360",
    image: ShelfImg,
    rating:Star,
    reviews: (85),
  },

];
