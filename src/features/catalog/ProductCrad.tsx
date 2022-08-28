import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
  Avatar,
  IconButton,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { Product } from "../../App/model/Product";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
interface Props {
  product: Product;
}

const ProductCrad = ({ product }: Props) => {
  return (
    <>
      <Card sx={{ maxWidth: "100%" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {product.name.at(0)?.toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={product.name}
          subheader={product.brand}
        />
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          sx={{
            backgroundColor: "#DEF5F4",
          }}
          image={product.pictureUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {(product.price / 100).toFixed(2)} ฿
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add To Cart</Button>
          <Button component={Link} to={`/catalog/${product.id}`} size="small">
            View
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCrad;
