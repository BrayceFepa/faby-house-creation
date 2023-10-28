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
        path: "/profile/:id",
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

  // 404 route at the end
  {
    path: "*",
    element: <NotFound />,
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
