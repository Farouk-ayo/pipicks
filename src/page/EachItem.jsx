import { Rating } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AllProducts } from "../UI/Body/Gender/Store";
import classes from "./Page.module.css";
import CartCtx from "../store/Cartctx";

const EachItem = () => {
  const params = useParams();
  const EachId = params.product;

  const [value, setValue] = useState(5);
  const [showButton, setShowButton] = useState(true);
  const [number, setNumber] = useState(0);

  const cartCtx = useContext(CartCtx);
  const product = AllProducts.find((id) => id[0] === EachId);

  useEffect(() => {
    const Eachproduct = cartCtx.items.find((each) => each.id === product[0]);
    if (Eachproduct) {
      let numb = Eachproduct.quantity;
      setNumber(numb);
      console.log(numb);
    } else {
      setNumber(1);
    }
  }, [cartCtx.items, product]);

  const addToCart = () => {
    cartCtx.addItems({
      id: product[0],
      productName: product[2],
      productImage: product[1],
      percentOff: product[4],
      price: product[3],
      quantity: 1,
      totalPrice: product[3] * 1,
    });
    setShowButton(false);
  };
  const removeCart = () => {
    cartCtx.removeItems(product[0]);
    if (number === 1) {
      setShowButton(true);
    }
  };

  return (
    <section className={classes.eachItem}>
      <div className={classes.imgContainer}>
        <img src={product[1]} alt="" />
      </div>

      <div className={classes.eachDetails}>
        <h1>{product[2]}</h1>
        <div className={classes.ratQuantity}>
          <p>Rated:</p>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              event.stopPropagation();
              setValue(newValue);
            }}
          />
          <p>({product[4]})</p>
        </div>
        <div className={classes.priceInfo}>
          <h3>₦{product[3]}.00</h3>
          <p>Stock Available</p>
        </div>
        <div className={classes.description}>
          <p>
            Description:
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              accusantium at optio alias est doloremque dolorum eius fugiat
              blanditiis expedita, sint culpa magnam sapiente unde voluptatum
              aliquid, maiores vel. Possimus.
            </span>
          </p>
        </div>
        <div className={classes.buttonComponent}>
          {showButton ? (
            <button className={classes.checkout} onClick={addToCart}>
              Add To Cart
            </button>
          ) : (
            <div className="btnDiv">
              <button className="firstBtn" onClick={addToCart}>
                +
              </button>
              <p>{number}</p>
              <button className="secondBtn" onClick={removeCart}>
                -
              </button>
            </div>
          )}
        </div>

        <p className={classes.hint}>
          Sold By: <Link to="/">Hunt Store</Link>
        </p>
      </div>
    </section>
  );
};

export default EachItem;
