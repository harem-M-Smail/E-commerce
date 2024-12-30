import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import HalfRating from "./Rating";

export default function ProductCard({ name, imgUrl, price, per_unit, slug, ratingValue }) {
  const nav = useNavigate();
  return (
    <Card
      onClick={() => nav("/products/" + slug)}
      sx={{
        width: 250,
        height: 380,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className="product-card"
    >
      <CardMedia sx={{ height: 190 }} image={imgUrl} title={name} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {name}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          Price: {price} {per_unit}
        </Typography>
        <HalfRating ratingValue={ratingValue} />
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}
