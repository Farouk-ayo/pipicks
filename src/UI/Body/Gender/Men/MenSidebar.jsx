import { Link } from "react-router-dom";
import { Store } from "../Store";
import classes from "../Store.module.css";

const MenSidebar = () => {
  return (
    <section className={classes.sidebar}>
      <div className={classes.fasCon}>
        <h4>{Store.men.Fashion}</h4>
        <p className={classes.fashion}>/Fashion</p>
      </div>
      <div className={classes.sec}>
        {Store.men.sections.map((eachSec) => {
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

export default MenSidebar;
