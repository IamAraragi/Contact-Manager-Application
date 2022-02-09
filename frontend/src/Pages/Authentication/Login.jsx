import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../../actions/auth.actions";
import AuthenticationForm from "../../Components/Authentication/AuthenticationForm";
import { login } from "../../Services/user.service";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tailwindClasses = {
    pageBody: "h-screen flex bg-gray-bg1",
  };
  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(loginRequest());

      let email = e.target.elements.email?.value;
      let password = e.target.elements.password?.value;

      const data = await login(email, password);

      if (data) {
        dispatch(loginSuccess(data));
        navigate("/");
      }
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  return (
    <div className={tailwindClasses.pageBody}>
      <AuthenticationForm
        title="Log in to your account 🔐"
        buttonLabel="Log In"
        bottomText1="Don't have an account?"
        bottomText2="Register"
        destination="/register"
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}
