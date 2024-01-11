import {
  Box,
  createTheme,
  SwipeableDrawer,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "../Cart/Cart";
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

export const CartDrawer = () => {
  const [states, setStates] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setStates({ ...states, [anchor]: open });
  };

  const list = (anchor) => (
    <Box role="presentation" height="100%">
      <Cart onClose={toggleDrawer(anchor, false)} />
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <AiOutlineShoppingCart
        style={{ color: "#7c287d" }}
        className="shoppingCart"
        onClick={toggleDrawer("right", true)}
      />
      <SwipeableDrawer
        anchor="right"
        open={states["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </SwipeableDrawer>
    </ThemeProvider>
  );
};
