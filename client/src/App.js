import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Products from "./pages/Products/Products";
// import Product from "./pages/Product/Product";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import "../src/scss/_global.scss";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import CategoriesBar from "./Components/CategoriesBar/CategoriesBar";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <CategoriesBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <span>Error</span>,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
