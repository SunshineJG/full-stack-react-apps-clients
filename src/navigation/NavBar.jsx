import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firbase.config";
import { signOut } from "firebase/auth";

export const NavBar = ({ user }) => {
  const navigate = useNavigate();

  const onClickSignOut = async () => {
    await signOut(auth);
    navigate("/sign-in");
  };

  return (
    <nav>
      <Link to="/">
        <h1 className="app-heading">Members-Only App</h1>
      </Link>
      {user && (
        <>
          <button className="sign-out-button" onClick={onClickSignOut}>
            Sign Out
          </button>
          <p className="logged-in-as space-before">Logged in as {user.email}</p>
        </>
      )}
    </nav>
  );
};
