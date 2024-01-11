import { allRandomKids } from "../Store";
import classes from "../Store.module.css";
import { Link } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
import EachKid from "./EachKid";
// import { MdFavorite } from "react-icons/md";

const KidsProducts = () => {
  return (
    <section className={classes.products}>
      {allRandomKids.map((random) => {
        return (
          <EachKid
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

      <Link to="/kids" className={classes.viewAll}>
        View All
        <BsPlayFill color="#7c287d" />
      </Link>
    </section>
  );
};
export default KidsProducts;
