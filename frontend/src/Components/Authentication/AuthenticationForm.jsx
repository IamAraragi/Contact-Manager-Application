import React from "react";
import InputField from "../../Components/common/InputField";
import Button from "../../Components/common/Button";
import AuthenticationTitle from "../../Components/Authentication/AuthenticationTitle";

export default function AuthenticationForm(props) {
  const tailwindClasses = {
    formContainer:
      "w-full max-w-md    m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16",
    formHeading: "text-2xl  font-medium text-primary mt-4 mb-12 text-center",
    btnContainer: "flex justify-center items-center mt-6",
  };

  return (
    <div className={tailwindClasses.formContainer}>
      <AuthenticationTitle
        titleClass={tailwindClasses.formHeading}
        title={props.title}
      />

      <form onSubmit={props.handleFormSubmit}>
        <InputField
          htmlFor="email"
          id="email"
          label="Email"
          type="email"
          placeholder="Your Email"
        />
        <InputField
          htmlFor="password"
          id="password"
          label="Password"
          type="password"
          placeholder="Your Password"
        />

        <div className={tailwindClasses.btnContainer}>
          <Button buttonLabel={props.buttonLabel} />
        </div>
      </form>
    </div>
  );
}
