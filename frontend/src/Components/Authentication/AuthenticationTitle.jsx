import React from "react";

export default function AuthenticationTitle(props) {
  return (
    <div>
      <h1 className={props.titleClass}>{props.title}</h1>
    </div>
  );
}
