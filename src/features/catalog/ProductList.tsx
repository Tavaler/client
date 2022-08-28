import { Grid } from "@mui/material";
import React from "react";
import { Product } from "../../App/model/Product";
import ProductCrad from "./ProductCrad";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product) => (
          <Grid item xs={4} sm={4} md={4} key={product.id}>
            <ProductCrad product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
