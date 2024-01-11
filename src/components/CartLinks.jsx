import { NavLink } from "react-router-dom";

const CartLinks = () => {
  return (
    <div className="links">
      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? "active" : "notActive")}
        end
      >
        1. Cart
      </NavLink>
      <hr />
      <NavLink
        to="/cart/checkout"
        className={({ isActive }) => (isActive ? "active" : "notActive")}
      >
        2. Details
      </NavLink>
      <hr />
      <NavLink
        to="/cart/payment"
        className={({ isActive }) => (isActive ? "active" : "notActive")}
      >
        3. Payment
      </NavLink>
      <hr />
      <NavLink
        to="/cart/review"
        className={({ isActive }) => (isActive ? "active" : "notActive")}
      >
        4. Review
      </NavLink>
    </div>
  );
};

export default CartLinks;
