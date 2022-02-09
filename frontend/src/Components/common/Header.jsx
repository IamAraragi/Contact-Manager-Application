import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth.actions";
import { Link } from "react-router-dom";

export default function Header(props) {
  const dispatch = useDispatch();
  const tailwindClasses = {
    headerContainer: "flex justify-between items-center bg-blue-900 p-2",
    headerTitle:
      "pl-2 text-xl font-bold no-underline text-blue-100 hover:text-blue-200",
    buttonContainer:
      "bg-blue-100 py-2 px-3 text-blue-900 hover:bg-blue-200 rounded",
  };

  const handleLogOutButtonClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    localStorage.removeItem("contacts");
    dispatch(logout());
  };

  return (
    <div className={tailwindClasses.headerContainer}>
      <div className="flex items-center">
        <Link to="/" className={tailwindClasses.headerTitle}>
          CONTACT MANAGER
        </Link>
      </div>
      <button
        type="button"
        className={tailwindClasses.buttonContainer}
        onClick={(e) => handleLogOutButtonClick(e)}
      >
        LOGOUT
      </button>
    </div>
  );
}
