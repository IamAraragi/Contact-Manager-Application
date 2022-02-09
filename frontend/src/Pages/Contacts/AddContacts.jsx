import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import AuthenticationTitle from "../../Components/Authentication/AuthenticationTitle";
import InputField from "../../Components/common/InputField";
import Button from "../../Components/common/Button";
import PhotoUpload from "../../Components/common/PhotoUpload";
import { addContacts } from "../../Services/contacts.service";
import {
  addContactFailure,
  addContactRequest,
  addContactSuccess,
} from "../../actions/contacts.actions";
import Header from "../../Components/common/Header";

export default function AddContacts() {
  const [state, setState] = useState({
    image: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tailwindClasses = {
    formContainer:
      "w-full max-w-md    m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16",
    formHeading: "text-2xl  font-medium text-primary mt-4 mb-12 text-center",
    btnContainer: "flex justify-center items-center mt-6",
  };

  const handleOnChange = (e) => {
    setState({ image: e.target.files[0] });
  };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(addContactRequest());

      let email = e.target.elements.email?.value;
      let name = e.target.elements.name?.value;
      let phone = e.target.elements.phone?.value;
      let address = e.target.elements.address?.value;
      let user_id = JSON.parse(localStorage.getItem("user")).id;

      const formData = new FormData();
      formData.append("user_id", user_id);
      formData.append("name", name);
      if (email) {
        formData.append("email", email);
      }
      formData.append("phone", phone);
      if (address) {
        formData.append("address", address);
      }
      formData.append("image", state.image);

      let data = await addContacts(formData);
      if (data) {
        dispatch(addContactSuccess());
        navigate("/");
      }
    } catch (err) {
      dispatch(addContactFailure());
    }
  };

  return (
    <div>
      <Header />
      <div className={tailwindClasses.formContainer}>
        <AuthenticationTitle
          titleClass={tailwindClasses.formHeading}
          title="Add Contacts"
        />

        <form onSubmit={handleFormSubmit}>
          <InputField
            htmlFor="name"
            id="name"
            label="Name"
            type="text"
            placeholder="Contact Name"
          />

          <InputField
            htmlFor="email"
            id="email"
            label="Email"
            type="email"
            placeholder="Contact Email"
          />

          <InputField
            htmlFor="address"
            id="address"
            label="Address"
            type="text"
            placeholder="Contact Address"
          />

          <InputField
            htmlFor="phone"
            id="phone"
            label="phone"
            type="tel"
            placeholder="Contact Phone"
          />

          <PhotoUpload handleOnChange={handleOnChange} />

          <div className={tailwindClasses.btnContainer}>
            <Button buttonLabel="Add" />
          </div>
        </form>
      </div>
    </div>
  );
}
