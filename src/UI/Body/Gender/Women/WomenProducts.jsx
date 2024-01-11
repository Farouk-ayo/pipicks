// import { Store } from "../Store";
import classes from "../Store.module.css";
import { allRandomWomen } from "../Store";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import EachWomen from "./EachWomen";

const WomenProducts = () => {
  return (
    <section className={classes.products}>
      {allRandomWomen.map((random) => {
        return (
          <EachWomen
            id={random[0]}
            key={random[0]}
            productName={random[2]}
            productImage={random[1]}
            percentOff={0}
            price={random[3]}
            quantity={random[4]}
            totalPrice={random[3] * 1}
          />
        );
      })}
      <Link to="/women" className={classes.viewAll}>
        View All
        <BsPlayFill color="#808080" />
      </Link>
    </section>
  );
};

export default WomenProducts;
