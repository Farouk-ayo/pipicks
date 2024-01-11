import classes from "./Footer.module.css";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.brand}>
        <h1 className="logo">HuntStore</h1>
        <article>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          expedita quod error facere reprehenderit delectus a sint, nisi, fugiat
          ut mollitia optio ipsum recusandae in porro suscipit quasi vero nemo.
        </article>
        <div className={classes.stores}>
          <button>
            <IoLogoGooglePlaystore size={30} />

            <h2>Google play</h2>
          </button>
          <button>
            <FaAppStoreIos size={30} />

            <h2>App store</h2>
          </button>
        </div>
      </div>
      <div>
        <h2>About Us</h2>

        <ul>
          <li>Career</li>
          <li>Our Stores</li>
          <li>Our Cares</li>

          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div>
        <h2>Customer Care</h2>
        <ul>
          <li>Help Center</li>
          <li>How To Buy</li>
          <li>Track Your Order</li>

          <li>Corporate & Bulk Purchasing</li>
          <li>Returns and Refunds</li>
        </ul>
      </div>
      <div>
        <h2>Contact Us</h2>
        <ul>
          <li>Obafemi Awolowo University, Osun State, Nigeria</li>
          <li>Email: Mustaphafarouk41@gmail.com</li>
          <li>Phone:+2348073946451</li>
        </ul>
        <div className={classes.socialLogo}>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
