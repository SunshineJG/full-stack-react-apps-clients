import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ isAuthed, isLoading }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isAuthed) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
};
