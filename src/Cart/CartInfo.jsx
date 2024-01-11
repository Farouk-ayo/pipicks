import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import CartCtx from "../store/Cartctx";
import classes from "./CartInfo.module.css";

const CartInfo = (props) => {
  const cartCtx = useContext(CartCtx);

  const addToCart = () => {
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
  const removeCart = () => {
    cartCtx.removeItems(props.id);
  };
  const clearCart = () => {
    cartCtx.clearItems(props.id);
  };

  return (
    <section className={classes.cartInfo}>
      <div className={classes.eachInfo}>
        <div className={classes.btnDiv}>
          <button className={classes.firstBtn} onClick={addToCart}>
            +
          </button>
          <p>{props.quantity}</p>
          <button className={classes.secondBtn} onClick={removeCart}>
            -
          </button>
        </div>
        <img src={props.productImage} alt="" />
        <div className={classes.details}>
          <h5>{props.productName}</h5>
          <p>
            <span>₦{props.price}.00</span>x<span>{props.quantity}</span>
          </p>
          <h2>₦{props.totalPrice}.00</h2>
        </div>
        <RxCross2 size={30} className="RxCross2" onClick={clearCart} />
      </div>
      <hr />
    </section>
  );
};

export default CartInfo;
