import WomenProducts from "./WomenProducts";
import WomenSidebar from "./WomenSidebar";
import classes from "../Store.module.css";

const Women = () => {
  return (
    <section className={classes.section} id="women">
      <WomenSidebar />
      <WomenProducts />
    </section>
  );
};

export default Women;
