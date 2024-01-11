import classes from "./Catalogue.module.css";
import shoes from "../../../assets/shoes.png";
import furnitures from "../../../assets/furnitures.png";
import electronics from "../../../assets/electronics.png";
import toys from "../../../assets/toys.png";
import clothes from "../../../assets/clothes.png";
import { GrCatalogOption } from "react-icons/gr";

const Catalogue = () => {
  return (
    <section className={classes.catalogue}>
      <div className={classes.headCat}>
        <GrCatalogOption className={classes.catalogIcon} />

        <h2>Catalogue</h2>
      </div>

      <div className={classes.catSection}>
        <div className={classes.clothes}>
          <img src={clothes} alt="" />
          <link rel="stylesheet" href="" /> clothes
          <link />
        </div>
        <div className={classes.electronics}>
          <img src={electronics} alt="" />
          <link rel="stylesheet" href="" /> electronics
          <link />
        </div>
        <div className={classes.furniture}>
          <img src={furnitures} alt="" />
          <link rel="stylesheet" href="" />
          furniture <link />
        </div>
        <div className={classes.shoes}>
          <img src={shoes} alt="" />
          <link rel="stylesheet" href="" />
          shoes <link />
        </div>
        <div className={classes.toys}>
          <img src={toys} alt="" />
          <link rel="stylesheet" href="" />
          toys <link />
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
