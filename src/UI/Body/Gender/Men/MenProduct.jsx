// import { Store } from "../Store";
import { allRandomMen } from "../Store";
import classes from "../Store.module.css";

import { Link } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
import EachMen from "./EachMen";
// import { MdFavorite } from "react-icons/md";

const MenProducts = () => {
  return (
    <section className={classes.products}>
      {allRandomMen.map((random) => {
        return (
          <EachMen
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

      <Link to="/men" className={classes.viewAll}>
        View All
        <BsPlayFill color="#808080" />
      </Link>
    </section>
  );
};

export default MenProducts;
