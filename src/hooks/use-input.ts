import { ChangeEvent, useReducer } from "react";

type Action =
  | { type: "INPUT"; value: string }
  | { type: "BLUR" }
  | { type: "RESET" };
type State = { value: string; isTouched: boolean };

const initialInputState: State = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state: State, action: Action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return initialInputState;
};

const useInput = (validateValue: (value: string)=>boolean) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer, initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", value: event.currentTarget.value });
  };

  const inputBlurHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
