import CartLinks from "../../components/CartLinks";
import classes from "./CartPages.module.css";
import CartCtx from "../../store/Cartctx";
import { useContext, useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import {
  CreditCardDetails1,
  CreditCardDetails2,
  PaypalEmail,
  SubmitButton,
} from "../../components/Form";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const cartCtx = useContext(CartCtx);
  const navigate = useNavigate();

  const [value, setValue] = useState("firstID");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const routeCheckout = () => {
    navigate(`/cart/checkout`);
  };
  const routeReview = () => {
    navigate(`/cart/review`);
  };

  return (
    <section className={classes.CartPage}>
      <CartLinks />
      <section className={`${classes.cart} ${classes.payment}`}>
        <div className={classes.carts}>
          <FormControl sx={{ width: "100%" }}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
              sx={{
                color: "#2B3445",
                width: "100%",
              }}
            >
              <FormControlLabel
                value="firstID"
                control={<Radio color="error" />}
                label="Pay with credit card"
                sx={{
                  padding: "1.5rem 1rem",
                  background: "white",
                  borderBottom: ".1rem solid #2b344533",
                  borderTopRightRadius: "1rem",
                  borderTopLeftRadius: "1rem",
                  boxShadow: "rgb(3 0 71 / 9%) 0px 1px 3px",
                  marginLeft: "0",
                  marginRight: "0",
                }}
              />
              {value === "firstID" ? (
                <div className={classes.creditCards}>
                  <CreditCardDetails1 />
                  <CreditCardDetails2 />
                  <SubmitButton />
                </div>
              ) : null}
              <FormControlLabel
                value="secondID"
                control={<Radio color="error" />}
                label="Pay with Paypal"
                sx={{
                  padding: "1.5rem 1rem",
                  background: "white",
                  borderBottom: ".1rem solid #2b344533",
                  boxShadow: "rgb(3 0 71 / 9%) 0px 1px 3px",
                  marginLeft: "0",
                  marginRight: "0",
                }}
              />
              {value === "secondID" ? (
                <div className={classes.creditCards}>
                  <PaypalEmail />
                </div>
              ) : null}
              <FormControlLabel
                value="thirdID"
                control={<Radio color="error" />}
                label="Cash On Delivery"
                sx={{
                  padding: "1.5rem 1rem",
                  background: "white",
                  borderBottom: ".1rem solid #2b344533",
                  borderBottomRightRadius: "1rem",
                  borderBottomLeftRadius: "1rem",
                  boxShadow: "rgb(3 0 71 / 9%) 0px 1px 3px",
                  marginLeft: "0",
                  marginRight: "0",
                }}
              />
            </RadioGroup>
          </FormControl>
          <section className={classes.btnGroup}>
            <Button
              color="error"
              disableElevation
              variant="outlined"
              fullWidth
              sx={{ textTransform: "none" }}
              onClick={routeCheckout}
            >
              Back To Checkout Details
            </Button>
            <Button
              color="error"
              variant="contained"
              disableElevation
              fullWidth
              sx={{ textTransform: "none" }}
              onClick={routeReview}
            >
              Review
            </Button>
          </section>
        </div>
        <section className={classes.totalAmount}>
          <section className={classes.fees}>
            <h4>
              <span>Subtotal:</span> <span>₦{cartCtx.totalAmount}</span>
            </h4>
            <h4>
              <span>Shipping:</span> <span></span>
            </h4>
            <h4>
              <span>Tax:</span> <span>₦40.00</span>
            </h4>
            <h4>
              <span>Discount:</span> <span></span>
            </h4>
          </section>
          <hr />
          <h1>₦{cartCtx.totalAmount + 40}.00</h1>
        </section>
      </section>
    </section>
  );
};

export default Payment;
