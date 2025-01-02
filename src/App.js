import { CircularProgress } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Root from "./components/Root";
import Home from "./pages/home/HomePage";
import ProductDetailsPage, {
  productDetailsLoader,
} from "./pages/products/ProductDetailsPage";
import ProductsPage, { productsLoader } from "./pages/products/ProductsPage";
import NotFound from "./pages/notfound/NotFound";
import ErrorPage from "./pages/errorpage/ErrorPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
          <Route index element={<Home />} />
          <Route
            path="products"
            element={<ProductsPage />}
            loader={productsLoader}
          />
          <Route
            path="products/:slug"
            element={<ProductDetailsPage />}
            loader={productDetailsLoader}
          />
        </Route>
        <Route path="*" element={<NotFound />} />

      </>
    )
  );
  return (
    <div className="app">
      <RouterProvider
        router={router}
        fallbackElement={
          <div className="progress">
            <CircularProgress />
          </div>
        }
      />
    </div>
  );
};
export default App;