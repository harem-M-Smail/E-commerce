import { Typography } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineZoomIn } from "react-icons/md";

import axios from "axios";
import { SlideshowLightbox } from "lightbox.js-react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../../components/ReviewCard";
const ProductDetailsPage = () => {
  const product = useLoaderData().data;
  console.log(product);
  return (
    <div className="product-details-page">
      <div className="product-overview">
        <div>
          <div className="product-detail-overview-texts">
            <Typography
              className="product-name-heading"
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
              {product.product.name}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              className="product-price"
            >
              $ {product.product.price} {product.product.per_unit}
            </Typography>
          </div>
          <SlideshowLightbox
            className="carousel container grid grid-cols-3 gap-2 mx-auto"
            showThumbnails={true}
          >
            {product.images.map((image) => (
              <img
                className="w-full rounded"
                src={image.url}
                alt={image.name}
                key={image.id}
              />
            ))}
          </SlideshowLightbox>

          <Typography pt={"1rem"} gutterBottom variant="body2" component="div">
            <MdOutlineZoomIn />
            explore product images
          </Typography>
        </div>
        <div className="product-description">
          <Typography gutterBottom variant="body2" component="div">
            <HTMLRenderer htmlContent={product.product.description} />
          </Typography>
          <button className="add-to-cart-btn">
            <FiShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
      <div className="reviews">
        <Typography gutterBottom variant="body2" component="div" className="reviews-container-header">
          Reviews
        </Typography>
        {product.product.reviews.length === 0 ? <p>There are no reviews </p> :
          <ReviewCard review={product.product.reviews}/>
        }
      </div>
    </div>
  );
};
export default ProductDetailsPage;
export const productDetailsLoader = async ({ params }) => {
  const { slug } = params;
  try {
    const res = await axios.get(
      "https://api.ewaae.com/current/public/api/products/get-product-by-slug/" +
        slug
    );

    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error(`Unexpected response status: ${res.status}`);
    }
  } catch (err) {
    console.error("Error fetching products:", err);
    throw new Error(err.message || "Failed to load products");
  }
};

const HTMLRenderer = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};
