import MenProducts from "./MenProduct";
import MenSidebar from "./MenSidebar";
import classes from "../Store.module.css";

const Men = () => {
  return (
    <section className={classes.section} id="men">
      <MenSidebar />
      <MenProducts />
    </section>
  );
};

export default Men;
