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
import Cart from "./Components/Cart/Cart";
import CartContext from "./Context/Cart/CartContext";
import { useContext, useEffect, useRef } from "react";
import "./App.scss";
import About from "./pages/About/About";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import Formations from "./pages/Formations/Formations";
import AuthGuard from "./Components/AuthGuard/AuthGuard";
import Profile from "./Components/Profile/Profile";
import Blog from "./Components/Blog/Blog";
import AdminLayout from "./Components/AdminComponents/AdminLayout/AdminLayout";
import AdminProducts from "./Components/AdminComponents/AdminProducts/AdminProducts";
import AdminCategories from "./Components/AdminComponents/AdminCategories/AdminCategories";
import AdminFromations from "./Components/AdminComponents/AdminFromations/AdminFromations";
import AdminUsers from "./Components/AdminComponents/AdminUsers/AdminUsers";
import AdminHone from "./Components/AdminComponents/AdminHone/AdminHone";
import ListProducts from "./Components/AdminComponents/AdminProducts/ListProducts/ListProducts";
import EditProduct from "./Components/AdminComponents/AdminProducts/EditProduct/EditProduct";
import { Helmet } from "react-helmet";
import ListCategories from "./Components/AdminComponents/AdminCategories/ListCategories/ListCategories";
import EditCategory from "./Components/AdminComponents/AdminCategories/EditCategory/EditCategory";

const Layout = () => {
  const cartRef = useRef(null);

  const { cartItems, showCart, showHideCart, hideCart } =
    useContext(CartContext);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the click target is inside the cart element or its children
      if (!cartRef.current || !cartRef.current.contains(event.target)) {
        hideCart();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [hideCart]);

  return (
    <div className="app">
      <Navbar />
      <MobileNavbar />
      <Outlet />
      <MobileFooter />
      <Footer />
      <div ref={cartRef} className={`cart-container  ${showCart && " active"}`}>
        <Cart />
      </div>
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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: (
          <AuthGuard>
            <Profile />
          </AuthGuard>
        ),
      },
      {
        path: "/formations",
        element: (
          <AuthGuard>
            <Formations />
          </AuthGuard>
        ),
      },
      {
        path: "/blog",
        element: (
          <AuthGuard>
            <Blog />
          </AuthGuard>
        ),
      },
    ],
  },

  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "auth/signup",
    element: <Signup />,
  },

  {
    path: "/adminfhc",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: (
          // <AdminLayout>
          <AdminHone />
          //{/* </AdminLayout> */}
        ),
      },
      {
        path: "/adminfhc/home",
        element: (
          // <AdminLayout>
          <AdminHone />
          //{/* </AdminLayout> */}
        ),
      },
      {
        path: "/adminfhc/products",
        element: (
          // <AdminLayout>
          <AdminProducts />
          //{/* </AdminLayout> */}
        ),
      },
      {
        path: "/adminfhc/listproducts",
        element: (
          // <AdminLayout>
          <ListProducts />
          //{/* </AdminLayout> */}
        ),
      },
      {
        path: "/adminfhc/editproduct/:productId",
        element: (
          // <AdminLayout>
          <EditProduct />
          //{/* </AdminLayout> */}
        ),
      },
      {
        path: "/adminfhc/categories",
        element: (
          // <AdminLayout>
          <AdminCategories />
          //{/* </AdminLayout> */}
        ),
      },
      {
        path: "/adminfhc/listcategories",
        element: (
          // <AdminLayout>
          <ListCategories />
          //{/* </AdminLayout> */}
        ),
      },
      {
        path: "/adminfhc/editcategory/:categoryId",
        element: (
          // <AdminLayout>
          <EditCategory />
          //{/* </AdminLayout> */}
        ),
      },
      {
        path: "/adminfhc/formations",
        element: (
          // <AdminLayout>
          <AdminFromations />
          //{/* </AdminLayout> */}
        ),
      },
      {
        path: "/adminfhc/users",
        element: (
          // <AdminLayout>
          <AdminUsers />
          //{/* </AdminLayout> */}
        ),
      },
    ],
  },

  // 404 route at the end
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div>
      <Helmet>
        <title>Faby House Creation</title>
        <meta
          name="description"
          content="Accéssoires et vêtements de mode Africaine"
        ></meta>
        <meta
          name="keywords"
          content="Mode, Femme Africaine, Accéssoire, chapeau, femme, crinolline, paille française, foulard nigerien, robe, mariage, afrique"
        ></meta>
      </Helmet>
      <FetchDataLayout>
        <RouterProvider router={router} />
      </FetchDataLayout>
    </div>
  );
}

export default App;
