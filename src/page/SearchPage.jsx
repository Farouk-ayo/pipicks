import Search from "../components/Search";
import { AllProducts } from "../UI/Body/Gender/Store";
import classes from "./Page.module.css";

const SearchPage = () => {
  return <Search data={AllProducts} className={classes.search} />;
};

export default SearchPage;
