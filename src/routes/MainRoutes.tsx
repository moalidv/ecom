import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@layouts/RootLayout";
import Home from "@pages/home/Home";
import About from "@pages/about/About";
import Categories from "@pages/categories/Categories";
import Cart from "@pages/cart/Cart";
import Wishlist from "@pages/wishlist/Wishlist";
import Products from "@pages/products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "categories", element: <Categories /> },
      { path: "cart", element: <Cart /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "products/:cat_prefix", element: <Products /> },
    ],
  },
]);

export const MainRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MainRoutes;
