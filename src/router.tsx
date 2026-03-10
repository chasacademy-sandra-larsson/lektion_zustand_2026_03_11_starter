import { createBrowserRouter } from "react-router"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Product from "./pages/ProductDetail"
import Cart from "./pages/Cart"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/:id", element: <Product /> },
      { path: "cart", element: <Cart /> },
    ],
  },
])

export default router