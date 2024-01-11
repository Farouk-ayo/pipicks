import "./App.css";
import Ui from "./UI/ui";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./page/Root";
import Kidspage from "./page/GenderPages/Kidspage";
import Menpage from "./page/GenderPages/Menpage";
import Womenpage from "./page/GenderPages/Womenpage";
import CartPage from "./page/CartPages/CartPage";
import NewArrival from "./page/NewArrival";

import Error from "./page/Error";
import EachItem from "./page/EachItem";
import Checkout from "./page/CartPages/Checkout";
import Payment from "./page/CartPages/Payment";
import Review from "./page/CartPages/Review";
import Signup from "./page/AuthenPages/Signup";
import ResetPassword from "./page/AuthenPages/ResetPassword";
import Login from "./page/AuthenPages/Login";
import SearchPage from "./page/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, path: "", element: <Ui /> },
      { path: "/men", element: <Menpage /> },
      { path: "/women", element: <Womenpage /> },
      { path: "/kids", element: <Kidspage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/cart/checkout", element: <Checkout /> },
      { path: "/cart/payment", element: <Payment /> },
      { path: "cart/review", element: <Review /> },
      { path: "/new-arrival", element: <NewArrival /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/search/:product", element: <EachItem /> },
    ],
  },
  { path: "sign-up", element: <Signup /> },
  { path: "login", element: <Login /> },
  { path: "reset-password", element: <ResetPassword /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
