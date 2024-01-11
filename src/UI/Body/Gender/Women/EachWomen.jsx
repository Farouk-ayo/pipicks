import classes from "../Store.module.css";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { useContext, useState } from "react";
import CartCtx from "../../../../store/Cartctx";
import { Button, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EachWomen = (props) => {
  const [value, setValue] = useState(5);

  const [favorite, setFavorite] = useState(true);
  const changeFavorite = (event) => {
    event.stopPropagation();
    setFavorite(!favorite);
  };

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
      totalPrice: props.totalPrice,
    });
  };

  return (
    <div
      className={classes.imageContainer}
      key={props.id}
      onClick={navigateHandler}
    >
      <img className={classes.image} src={props.productImage} alt="" />
      <div className={classes.detailCon}>
        <div className={classes.titleCon}>
          <div className={classes.title}>
            <h3>{props.productName}</h3> <p>({props.quantity})</p>
          </div>
          <Rating
            name="simple-controlled"
            value={value}
            onClick={(event) => {
              event.stopPropagation();
            }}
            onChange={(event, newValue) => {
              event.stopPropagation();
              setValue(newValue);
            }}
          />
          <p className="price">₦{props.totalPrice}.00</p>
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

      {favorite ? (
        <MdFavoriteBorder
          color="#7c287d"
          size={20}
          className={classes.favourite}
          onClick={changeFavorite}
        />
      ) : (
        <MdFavorite
          color="#7c287d"
          size={20}
          className={classes.favourite}
          onClick={changeFavorite}
        />
      )}
    </div>
  );
};

export default EachWomen;
