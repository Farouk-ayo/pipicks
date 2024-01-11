import classes from "./Footer.module.css";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.brand}>
        <article>
          PIPICKS is not another online store but a home. When you walk in, you
          pick up quality items alone. We make online purchase/transaction
          simple and easy as we bring cryptocurrency onboard. You get what you
          see and order for without any changes on PIPICKS..........
        </article>
        <div className={classes.stores}>
          <button>
            <IoLogoGooglePlaystore size={30} color="#febc12" />

            <h2>Google play</h2>
          </button>
          <button>
            <FaAppStoreIos size={30} color="#febc12" />

            <h2>App store</h2>
          </button>
        </div>
      </div>
      <div>
        <h2>About Us</h2>

        <ul>
          <li>Our Stores</li>
          <li>Terms & Condition</li>
          <li>Selling on Pipicks</li>
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
          <li>Mukadam Mahmud Street Nigeria</li>
          <li>Email: help@pipicks.com</li>
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
