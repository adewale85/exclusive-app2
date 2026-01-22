
import Bag from "../assets/Gucci-Bag.svg"
import CPU from "../assets/CPU cooler.svg"
import GamePad from "../assets/Gamepad.svg"
import Jacket from "../assets/Jacket.svg"

export interface Listprops{
  id: number;
  title: string;
  subTitle:  string;
  price: string;
  oldPrice?: string;
  image: string;
  rating?: string;
  reviews?: number;
  percent?: string;
  bgpercent?: boolean;
  title2?: string;
  buttonText?: string
}

export const WishlistData: Listprops [] = [
   {
    id: 1,
    title: "Gucci duffle bag",
    title2: "Wishlist (4)",
    buttonText: "Move All To Bag",
    subTitle: "Coat",
    price: "$960",
    oldPrice: "$1160 ",
    image: Bag,
    rating: "",
    percent: "-35%",
    bgpercent: true
    
  },
  
   {
    id: 2,
    title: "RGB liquid CPU Cooler",
    subTitle: "",
    price: "$1960",
    oldPrice: "",
    image: CPU,
    rating: "",
   
   
  },

   {
    id: 3,
    title: "GP11 Shooter USB Gamepad",
    subTitle: "",
    price: "$550",
    oldPrice: "",
    image: GamePad,
    rating: "",
    
  },

   {
    id: 4,
    title: "Quilted Satin Jacket",
    subTitle: "",
    price: "$750",
    oldPrice: "",
    image: Jacket,
    rating: "",
    
  },

  


] 