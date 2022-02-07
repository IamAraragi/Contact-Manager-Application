import React from "react";

export default function Button(props) {
  return (
    <div>
      <button
        className={`bg-green py-2 px-4 text-sm rounded border border-green focus:outline-none focus:border-green-dark`}
      >
        {props.buttonLabel}
      </button>
    </div>
  );
}
