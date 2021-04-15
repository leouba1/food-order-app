import { useRef, useState, FormEvent } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

type Props = {
  onAddToCart: (amount: number) => void;
};

const MealItemForm = ({ onAddToCart }: Props) => {
  const [amountIsValid, setamountIsValid] = useState(true);
  const amountRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (amountRef.current && amountRef.current.value.trim().length !== 0) {
      const enteredAmount = +amountRef.current.value;
      if (enteredAmount < 1 || enteredAmount > 5) {
        setamountIsValid(false);
        return;
      }
      onAddToCart(enteredAmount);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "ammount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
