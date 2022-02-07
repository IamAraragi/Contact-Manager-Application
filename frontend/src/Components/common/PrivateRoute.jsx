import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let location = useLocation();

  const { loading, currentUser } = useSelector((state) => state.auth);

  if (loading) {
    return <p>Checking authenticaton..</p>;
  }

  if (currentUser === null) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
