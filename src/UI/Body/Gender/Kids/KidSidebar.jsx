import classes from "../Store.module.css";
import { Store } from "../Store";
import { Link } from "react-router-dom";

const KidSidebar = () => {
  return (
    <section className={classes.sidebar}>
      <div className={classes.fasCon}>
        <h4>{Store.kids.Fashion}</h4>
        <p className={classes.fashion}>/Fashion</p>
      </div>
      <div className={classes.sec}>
        {Store.kids.sections.map((eachSec) => {
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

export default KidSidebar;
