import React from "react";

export default function InputField(props) {
  return (
    <div>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        defaultValue={props.defaultValue}
        type={props.type}
        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
}
