import React, { Fragment, ReactNode } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

type Props = {
  children?: ReactNode;
  onClose?: () => void;
};

const Backdrop = ({ onClose }: Props) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }: Props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal = ({ children, onClose }: Props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
