import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LayOut } from "./LayOut.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Auth/Login.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/modules";

import Register from "./Pages/Auth/Register";
import Error from "./Pages/Error/Error.jsx";
import Cat from "./Pages/Cat/Cat.jsx";
import CartPage from "./Pages/Order/Card.jsx";
import WishListPage from "./Pages/Order/WishList.jsx";
import Product from "./Pages/Product/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: (
          <>
            <SignedIn>
              <Cat />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        ),
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/wishlist",
        element: <WishListPage />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الـ animation
      once: true, // الـ animation يحصل مرة واحدة بس
      offset: 100, // المسافة قبل ما الـ animation يبدأ
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
