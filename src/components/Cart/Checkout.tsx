import { FormEvent } from "react";
import classes from "./Checkout.module.css";
import { UserInfo } from "../../models/UserInfo";
import useInput from "../../hooks/use-input";

type Props = {
  onCancel: () => void;
  onConfirm: (data: UserInfo) => void;
};

const isNotEmpty = (value: string) => value.trim() !== "";
const isFiveChars = (value: string) => value.trim().length === 5;

const Checkout = ({ onCancel, onConfirm }: Props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: streetValue,
    isValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: postalCodeValue,
    isValid: postalCodeIsValid,
    hasError: postalHasError,
    valueChangeHandler: postalCodeHandler,
    inputBlurHandler: postalCodeBlurHandler,
  } = useInput(isFiveChars);

  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) {
    formIsValid = true;
  }

  const confirmHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    onConfirm({
      name: nameValue,
      street: streetValue,
      postal: postalCodeValue,
      city: cityValue,
    });
  };

  const nameControlClasses = `${classes.control} ${
    nameHasError ? classes.invalid : ""
  }`;
  const streetControlClasses = `${classes.control} ${
    streetHasError ? classes.invalid : ""
  }`;
  const cityControlClasses = `${classes.control} ${
    cityHasError ? classes.invalid : ""
  }`;
  const postalControlClasses = `${classes.control} ${
    postalHasError ? classes.invalid : ""
  }`;

  return (
    <form onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <div data-tip={nameHasError ? "Please enter a valid name" : null}>
          <input
            type="text"
            id="name"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </div>
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <div data-tip={streetHasError ? "Please enter a valid street" : null}>
          <input
            type="text"
            id="street"
            value={streetValue}
            onChange={streetChangeHandler}
            onBlur={streetBlurHandler}
          />
        </div>
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <div data-tip={postalHasError ? "Please enter a valid postal code" : null}>
          <input
            type="text"
            id="postal"
            value={postalCodeValue}
            onChange={postalCodeHandler}
            onBlur={postalCodeBlurHandler}
          />
        </div>
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <div data-tip={cityHasError ? "Please enter a valid city" : null}>
          <input
            type="text"
            id="city"
            value={cityValue}
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
          />
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button disabled={!formIsValid} className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
