import EachKid from "../../UI/Body/Gender/Kids/EachKid";
import { Store } from "../../UI/Body/Gender/Store";
import classes from "../../UI/Body/Gender/Store.module.css";

const Kidspage = () => {
  return (
    <section className={classes.productsPage}>
      {Store.kids.Clothes.map((random) => {
        return (
          <EachKid
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
      {Store.kids.Toys.map((random) => {
        return (
          <EachKid
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

export default Kidspage;
