// import BreadPoster from "../assets/Bread poster.svg";
// import Camera from "../assets/Camera.svg";
// import Laptop from "../assets/Gaming-Laptop.svg";
// import Cream from "../assets/Cream_product.svg";
// import Car from "../assets/Car.svg";
// import Soccer from "../assets/Soccer_boot.svg";
// import Pad from "../assets/Game_Pad.svg";
// import Jackect from "../assets/Jacket.svg";
// import Elipse1 from "../assets/Elipse 1.svg"
// import Elipse2 from "../assets/Ellipse2.svg"
// import Elipse from "../assets/Ellipse.svg"
// import Elipse_b from "../assets/Ellipse_b.svg"





// export interface Exploreprops{
//   id: number;
//   title: string;
//   subTitle?:  string;
//   price: string;
//   oldPrice?: string;
//   image: string;
//   rating: number;
//   reviews: number;
//   bg?: boolean;
//   icon1?: string
//   icon2?: string
// }

// export const ExploreOurProductsData: Exploreprops [] = [
// {
//     id: 1,
//     title: "Breed Dry Dog Food",
//     price: "$100",
//     rating: 3,
//     reviews: (35),
//     image: BreadPoster,
    
    
    
//   },
  
//   {
//     id: 2,
//     title: "CANON EOS DSLR Camera", 
//     price: "$360",
//     rating: 4,
//     reviews: (95),
//     image: Camera,
//   },

//   {
//     id: 3,
//     title: "ASUS FHD Gaming Laptop",
//     price: "$700",
//     rating: 5,
//     reviews: (325),
//     image: Laptop,            
//   },

//   {
//    id: 4,
//     title: "Curology Product Set",
//     price: "$500",
//     rating: 4,
//     reviews: (145),
//     image: Cream,
    
//   },

//   {
//    id: 5,
//     title: "Kids Electric Car",
//     price: "$960",
//     rating: 5,
//     reviews: (65),
//     image: Car,
//     bg: true,
//     icon1: Elipse1,
//     icon2: Elipse2
    
//   },

//   {
//    id: 6,
//     title: "Jr. Zoom Soccer Cleats",
//     price: "$1160",
//     rating: 5,
//     reviews: (35),
//     image: Soccer,
//     icon1: Elipse,
//     icon2: Elipse2
    
    
//   },

//   {
//    id: 7,
//     title: "GP11 Shooter USB Gamepad",
//     price: "$660",
//     rating: 4.5,
//     reviews: (55),
//     image: Pad,
//     bg: true,
//     icon1: Elipse_b,
//     icon2: Elipse2

    
//   },

//   {
//    id: 8,
//     title: "Quilted Satin Jacket",
//     price: "$660",
//     rating: 4.5,
//     reviews: (55),
//     image: Jackect,
//     icon1: Elipse_b,
//     icon2: Elipse2
    
//   },


// ]


     
   

       

export interface Exploreprops {
  products: ExploreOurProductsData[]
  total: number
  skip: number
  limit: number
}

export interface ExploreOurProductsData {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand?: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: Meta
  images: string[]
  thumbnail: string
}

export interface Dimensions {
  width: number
  height: number
  depth: number
}

export interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface Meta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}

