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
import MobileNavbar from "./Components/Navbar/MobileNavbar";
import MobileFooter from "./Components/Footer/MobileFooter";
import FetchDataLayout from "./Components/Layouts/FetchDataLayout";
import NotFound from "./Components/NotFound/NotFound";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <MobileNavbar />
      <Outlet />
      <MobileFooter />
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
      // 404 route at the end
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <FetchDataLayout>
        <RouterProvider router={router} />
      </FetchDataLayout>
    </div>
  );
}

export default App;
