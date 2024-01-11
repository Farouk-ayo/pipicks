import classes from "./Flash.module.css";
import CartCtx from "../../../store/Cartctx";
import { useContext, useState } from "react";
import { Button, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Flash = (props) => {
  const [value, setValue] = useState(props.rating);
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/search/${props.id}`);
  };

  const cartCtx = useContext(CartCtx);
  const addToCart = (event) => {
    event.stopPropagation();
    cartCtx.addItems({
      id: props.id,
      productName: props.productName,
      productImage: props.productImage,
      percentOff: props.percentOff,
      price: props.price,
      quantity: 1,
      totalPrice: props.price * 1,
    });
  };

  return (
    <div className={classes.flashcontainer} onClick={navigateHandler}>
      <div>
        <h5>{props.percentOff}</h5>
      </div>

      <div className={classes.image}>
        <img className={classes.productImage} src={props.productImage} alt="" />
      </div>
      <div className={classes.details}>
        <div className={classes.productDetail}>
          <h6>{props.productName}</h6>
          <Rating
            name="simple-controlled"
            value={value}
            onClick={(event) => {
              event.stopPropagation();
            }}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />

          <p className="price"> ₦{props.price}.00</p>
        </div>
        <Button
          className={classes.btn}
          variant="outlined"
          size="small"
          onClick={addToCart}
          color="secondary"
          style={{ fontSize: ".7rem" }}
        >
          Add To Cart +
        </Button>
      </div>
    </div>
  );
};

export default Flash;
