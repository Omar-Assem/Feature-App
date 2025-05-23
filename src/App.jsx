import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LayOut } from "./LayOut.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login  from "./Pages/Auth/Login.jsx";

import "swiper/modules";

import Register from "./Pages/Auth/Register";
import Error from "./Pages/Error/Error.jsx";
import Cat from "./Pages/Cat/Cat.jsx";
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
      // {
      //   path: 'product',
      //   element: <Product />
      // },
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
  return <RouterProvider router={router} />;
}

export default App;
