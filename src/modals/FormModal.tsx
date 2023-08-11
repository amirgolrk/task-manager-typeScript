/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import "./FormModal.css";
//import "bootstrap/dist/css/bootstrap.min.css";


const FormModal = ({ formIsOpen, setFormIsOpen, onConfirm, onInput }) => {
  if (!formIsOpen) {
    return null; 
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={() => setFormIsOpen(false)} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={() => {
            setFormIsOpen(false);
            onConfirm();
          }}
          onInput={onInput}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default FormModal;

