import React from "react";
import classes from "./Input.module.css";

type Props = {
  label: string;
  input: any;
};

const Input = React.forwardRef<HTMLInputElement, Props>(({label, input}, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
