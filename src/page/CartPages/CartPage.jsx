import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import CartCtx from "../../store/Cartctx";
import classes from "./CartPages.module.css";
import Form from "../../components/Form";
import CartLinks from "../../components/CartLinks";

const CartPage = () => {
  const cartCtx = useContext(CartCtx);
  const number = cartCtx.items.length;

  const addToCart = (item) => {
    cartCtx.addItems({ ...item, quantity: 1, totalPrice: item.price });
    console.log(item);
  };
  const removeCart = (id) => {
    cartCtx.removeItems(id);
  };

  const clearCart = (id) => {
    cartCtx.clearItems(id);
  };

  return (
    <section className={classes.CartPage}>
      <CartLinks />
      <section className={classes.cart}>
        {number ? (
          <div className={classes.carts}>
            {cartCtx.items.map((item) => {
              return (
                <section className={classes.cartInfo}>
                  <div className={classes.info}>
                    <img src={item.productImage} alt="" />
                    <div className={classes.eachInfo}>
                      <div className={classes.details}>
                        <h5>{item.productName}</h5>
                        <span>
                          <p>
                            <span>₦{item.price}.00</span>x
                            <span>{item.quantity}</span>
                          </p>
                          <h2>₦{item.totalPrice}.00</h2>
                        </span>
                      </div>
                      <div className="btnDiv">
                        <button
                          className="secondBtn"
                          onClick={removeCart.bind(null, item.id)}
                        >
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          className="firstBtn"
                          onClick={addToCart.bind(null, item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <RxCross2
                    size={40}
                    className="RxCross2"
                    onClick={clearCart.bind(null, item.id)}
                  />
                </section>
              );
            })}
          </div>
        ) : (
          <section className={classes.null}>
            <h1>There's nothing here, pls add to cart😌😌</h1>
          </section>
        )}

        <section className={classes.totalAmount}>
          <h3>
            <span>Total:</span>
            <span>₦{cartCtx.totalAmount}</span>
          </h3>
          <hr />
          <form
            action="
            "
          >
            <label htmlFor="comment" className={classes.comment}>
              Additional Comments <span>Note</span>
            </label>
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="10"
            ></textarea>
            <hr />
            <Form />
          </form>
        </section>
      </section>
    </section>
  );
};

export default CartPage;
