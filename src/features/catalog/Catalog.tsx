
import React,{useEffect,useState} from "react";
import { Product } from "../../App/model/Product";
import ProductList from "./ProductList";




const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([])



  useEffect(() => {
    console.log("5555555")
    fetch("http://localhost:5000/api/Products")
    .then((response)=>response.json())
    .then((data)=>setProducts(data))
    .catch((error)=>console.log(error))
  }, [])

  return (
    <>
    <ProductList products={products}/>
    </>
  );
};

export default Catalog;
