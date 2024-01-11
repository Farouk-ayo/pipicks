import { useReducer } from "react";

const defaultState = {
  value: "",
  isActive: false,
};

const inputReducer = (state, action) => {
  if (action.type === "") {
  }
};

const UseInput = () => {
  const [initialState, dispatchState] = useReducer(inputReducer, defaultState);

  const validateEmailHandler = () => {};

  const validatePasswordHandler = () => {};

  const submitHandler = () => {};

  return {};
};

export default UseInput;
