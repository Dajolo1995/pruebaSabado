import { Navigate } from "react-router-dom";

function PrivateApp({children}) {
  return !localStorage.getItem("user") ? <Navigate to="/" /> : children;
}

export default PrivateApp;
