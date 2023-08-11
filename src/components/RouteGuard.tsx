/* eslint-disable react/prop-types */
//importing Navigate instead of Redirect because of react-dom unsupported
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const RouteGuard = ({ children }) => {
  const hasJWT = () => {
    return !!localStorage.getItem("token");
  }

  useEffect(() => {
    hasJWT();
  }, []);

  return (
    <>
      {
        hasJWT() ? children : <Navigate to={"login"}/>
      }
    </>
  );
};

export default RouteGuard;
