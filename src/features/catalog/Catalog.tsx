import React, { useEffect, useState } from "react";
import agent from "../../App/api/agent";
import LoadingComponent from "../../App/layout/LoadingComponent";
import { Product } from "../../App/model/Product";
import { useAppSelector, useAppDispatch } from "../../App/store/configureStore";
import { productSelectors, fetchProductsAsync } from "./catalogSlice";
import ProductList from "./ProductList";

const Catalog = () => {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, status } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded,dispatch]);

  if (status.includes("pending")) return <LoadingComponent message="Loading Products..." />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Catalog;
