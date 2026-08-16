
import { useSharedData } from '../context/StateContext'

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const { isLoggedIn } = useSharedData();
 
 // Your authentication logic goes here...
 
  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;