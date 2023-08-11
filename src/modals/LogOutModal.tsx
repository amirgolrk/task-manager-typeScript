/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import LogOutOverLay from "./LogOutOverlay";
import "./logOutModal.css"
const LogOutModal = ({
  logOutModalOpen,
  setLogOutModalOpen
}) => {
  if (!logOutModalOpen) {
    return null; // If logOutModalOpen is false, do not render the modal
  }
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={() => setLogOutModalOpen(false)} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <LogOutOverLay
          onConfirm={() => {
            setLogOutModalOpen(false);
          }}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default LogOutModal;
