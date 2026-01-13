import Home from "../pages/Home";
import ProductsTest from "../components/ProductsTest";

export const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products",
    element: <ProductsTest />
  },
  {
    path: "/products/:id",
    element: <ProductsTest />
  },
  {
    path: "*",
    element: <div style={{ padding: 40 }}>Page not found</div>
  }
];
