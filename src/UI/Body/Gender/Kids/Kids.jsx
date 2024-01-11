import KidSidebar from "./KidSidebar";
import classes from "../Store.module.css";
import KidsProducts from "./KidsProducts";

const Kids = () => {
  return (
    <section className={classes.section} id="kids">
      <KidSidebar />
      <KidsProducts />
    </section>
  );
};

export default Kids;
