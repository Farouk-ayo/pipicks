import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { useContext, useState } from "react";

import {
  ShippingAddress1,
  ShippingAddress2,
  TotalAmount,
} from "../../components/Form";
import classes from "./CartPages.module.css";
import CartCtx from "../../store/Cartctx";
import { useNavigate } from "react-router-dom";
import CartLinks from "../../components/CartLinks";

const Checkout = () => {
  const cartCtx = useContext(CartCtx);
  const navigate = useNavigate();

  const [Billing, showBilling] = useState(false);
  const checkboxHandler = () => {
    showBilling(!Billing);
  };

  const routeCart = () => {
    navigate(`/cart`);
  };
  const routePayment = () => {
    navigate(`/cart/payment`);
  };

  return (
    <section className={classes.CartPage}>
      <CartLinks />

      <section className={`${classes.cart} ${classes.checkout}`}>
        <div className={classes.carts}>
          <section className={classes.shippingInfo}>
            <p>Shipping Address</p>
            <section className={classes.shippingAddress}>
              <ShippingAddress1 />
              <ShippingAddress2 />
            </section>
          </section>
          <section className={classes.shippingInfo}>
            <p>Billing Address</p>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Billing}
                  onChange={checkboxHandler}
                  style={{ color: "#2B3445" }}
                />
              }
              style={{ color: "grey" }}
              label="Same as shipping address"
            />
            {!Billing ? (
              <section className={classes.shippingAddress}>
                <ShippingAddress1 />
                <ShippingAddress2 />
              </section>
            ) : null}
          </section>
          <section className={classes.btnGroup}>
            <Button
              color="secondary"
              disableElevation
              variant="outlined"
              fullWidth
              sx={{ textTransform: "none" }}
              onClick={routeCart}
            >
              Back To Cart
            </Button>
            <Button
              color="secondary"
              variant="contained"
              disableElevation
              fullWidth
              sx={{ textTransform: "none" }}
              onClick={routePayment}
            >
              Proceed To Payment
            </Button>
          </section>
        </div>
        <section className={classes.totalAmount}>
          <section className={classes.fees}>
            <h4>
              <span>Subtotal:</span> <span>₦{cartCtx.totalAmount}</span>
            </h4>
            <h4>
              <span>Shipping:</span> <span>₦0.00</span>
            </h4>
            <h4>
              <span>Tax:</span> <span>₦40.00</span>
            </h4>
            <h4>
              <span>Discount:</span> <span>₦0.00</span>
            </h4>
          </section>
          <hr />
          <h1>₦{cartCtx.totalAmount + 40}.00</h1>
          <TotalAmount />
        </section>
      </section>
    </section>
  );
};

export default Checkout;
