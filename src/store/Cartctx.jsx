import React from "react";

const CartCtx = React.createContext({
  items: [],
  totalAmount: 0,
  addItems: (item) => {},
  removeItems: (id) => {},
  clearItems: () => {},
});

export default CartCtx;
