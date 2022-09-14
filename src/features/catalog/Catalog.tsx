
import axios from "axios";
import React,{useEffect,useState} from "react";
import agent from "../../App/api/agent";
import LoadingComponent from "../../App/layout/LoadingComponent";
import { Product } from "../../App/model/Product";
import ProductList from "./ProductList";




const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    console.log("5555555")
    agent.Catalog.list()
    .then((response : any)=>{setProducts(response)})
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false));
  }, [])

  if (loading) return <LoadingComponent message="Loading Products....." />;
  return (
    <>
    <ProductList products={products}/>
    </>
  );
};

export default Catalog;
