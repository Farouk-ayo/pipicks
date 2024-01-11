import { Store } from "../../UI/Body/Gender/Store";
import classes from "../../UI/Body/Gender/Store.module.css";
import EachMen from "../../UI/Body/Gender/Men/EachMen";

const Menpage = () => {
  return (
    <section className={classes.productsPage}>
      {Store.men.Clothes.map((random) => {
        return (
          <EachMen
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

      {Store.men.Electronics.map((random) => {
        return (
          <EachMen
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
      {Store.men.Furniture.map((random) => {
        return (
          <EachMen
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

      {Store.men.Shoes.map((random) => {
        return (
          <EachMen
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

export default Menpage;
