import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../UI/Footer/Footer";
import Header from "../UI/Header/Header";
import CartProvider from "../store/CartProvider";

const Root = () => {
  return (
    <CartProvider>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </CartProvider>
  );
};

export default Root;
