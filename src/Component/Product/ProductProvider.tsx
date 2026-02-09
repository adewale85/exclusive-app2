import { Children, useEffect, useState } from "react";

const ProductProvider = ({Children}) =>{

const [products, setProducts] = useState ([]);

useEffect (() =>{
    const fetchProducts = async () => {
        const response = await fetch ("https://dummyjson.com/products" )
        const data = await response.json();
        setProducts(data)
        console.log(data);  
    };
    fetchProducts();
},[])

return <ProductContext.provider value={{products}} >{Children}</ProductContext.provider>

}

export default ProductProvider;