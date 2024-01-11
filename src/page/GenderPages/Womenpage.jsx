import { Store } from "../../UI/Body/Gender/Store";
import classes from "../../UI/Body/Gender/Store.module.css";
import EachWomen from "../../UI/Body/Gender/Women/EachWomen";

const Womenpage = () => {
  return (
    <section className={classes.productsPage}>
      {Store.women.Clothes.map((random) => {
        return (
          <EachWomen
            id={random[0]}
            productName={random[2]}
            productImage={random[1]}
            percentOff={0}
            price={random[3]}
            quantity={random[4]}
            totalPrice={random[3] * 1}
          />
        );
      })}
      {Store.women.Bags.map((random) => {
        return (
          <EachWomen
            id={random[0]}
            productName={random[2]}
            productImage={random[1]}
            percentOff={0}
            price={random[3]}
            quantity={random[4]}
            totalPrice={random[3] * 1}
          />
        );
      })}{" "}
      {Store.women.Shoes.map((random) => {
        return (
          <EachWomen
            id={random[0]}
            productName={random[2]}
            productImage={random[1]}
            percentOff={0}
            price={random[3]}
            quantity={random[4]}
            totalPrice={random[3] * 1}
          />
        );
      })}{" "}
      {Store.women.Jewelry.map((random) => {
        return (
          <EachWomen
            id={random[0]}
            productName={random[2]}
            productImage={random[1]}
            percentOff={0}
            price={random[3]}
            quantity={random[4]}
            totalPrice={random[3] * 1}
          />
        );
      })}
    </section>
  );
};

export default Womenpage;
