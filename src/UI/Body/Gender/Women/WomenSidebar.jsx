import { Link } from "react-router-dom";
import { Store } from "../Store";
import classes from "../Store.module.css";

const WomenSidebar = () => {
  return (
    <section className={classes.sidebar}>
      <div className={classes.fasCon}>
        <h4>{Store.women.Fashion}</h4>
        <p className={classes.fashion}>/Fashion</p>
      </div>
      <div className={classes.sec}>
        {Store.women.sections.map((eachSec) => {
          return (
            <span key={eachSec.id}>
              <Link to={"/"} className={classes.eachSec}>
                {eachSec.type}
              </Link>
              {eachSec.img}
            </span>
          );
        })}
      </div>
    </section>
  );
};
export default WomenSidebar;
