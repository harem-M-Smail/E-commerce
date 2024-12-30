import { Pagination } from "@mui/material";
import axios from "axios";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductsPage = () => {
  const response = useLoaderData();
  const nav = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const perPage = params.get("perPage");
  const paginationPageLimit = Math.ceil(response.data.total / perPage);
  console.log(response.data);
  return (
    <div className="products-page">
      <h1 className="products-page-heading">products</h1>
      <div className="product-cards-container">
        {response &&
          response.data.data.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              imgUrl={product.image.url}
              price={product.price}
              per_unit={product.per_unit}
              slug={product.slug}
              ratingValue={product.rating}
            />
          ))}
      </div>
      <div className="pagination-div">
        <Pagination
          className="pagination"
          count={paginationPageLimit}
          onChange={(e, page) => nav("/products?page=" + page + "&perPage=12")}
        />
      </div>
    </div>
  );
};
export default ProductsPage;
export const productsLoader = async ({ request }) => {
  const queryParam = request.url.split("?")[1];
  try {
    const res = await axios.get(
      "https://api.ewaae.com/current/public/api/products/get-products?" +
        queryParam
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
