import classes from "./Header.module.css";
import ContactDetails from "./ContactDetails";
import Menu from "./Menu";
import NavigationBar from "./NavigationBar";

const Header = (props) => {
  window.addEventListener("scroll", function () {
    const head = document.querySelector(".header");
    head.classList.toggle("fixed", window.scrollY > 100);
  });

  return (
    <section className={classes.headerSection} value={props.scrollValue}>
      <ContactDetails />
      <NavigationBar />
      <Menu />
    </section>
  );
};

export default Header;
