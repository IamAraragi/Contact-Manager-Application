import React from "react";

export default function Header(props) {
  const tailwindClasses = {
    headerContainer: "flex justify-between items-center bg-blue-900 p-2",
    headerTitle:
      "pl-2 text-xl font-bold no-underline text-blue-100 hover:text-blue-200",
    buttonContainer:
      "bg-blue-100 py-2 px-3 text-blue-900 hover:bg-blue-200 rounded",
  };
  return (
    <div className={tailwindClasses.headerContainer}>
      <div className="flex items-center">
        <a href="#main" className={tailwindClasses.headerTitle}>
          CONTACT MANAGER
        </a>
      </div>
      <button
        type="button"
        className={tailwindClasses.buttonContainer}
        onClick={(e) => props.handleLogOutButtonClick(e)}
      >
        LOGOUT
      </button>
    </div>
  );
}
