import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  registerFailure,
  registerRequest,
  registerSuccess,
} from "../../actions/auth.actions";
import AuthenticationForm from "../../Components/Authentication/AuthenticationForm";
import { register } from "../../Services/user.service";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tailwindClasses = {
    pageBody: "h-screen flex bg-gray-bg1",
  };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(registerRequest());

      let email = e.target.elements.email?.value;
      let password = e.target.elements.password?.value;

      const data = await register(email, password);

      if (data) {
        dispatch(registerSuccess());
        navigate("/login");
      }
    } catch (err) {
      dispatch(registerFailure());
    }
  };

  return (
    <div className={tailwindClasses.pageBody}>
      <AuthenticationForm
        title="Register"
        buttonLabel="Register"
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}
