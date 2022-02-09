import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import AuthenticationTitle from "../../Components/Authentication/AuthenticationTitle";
import InputField from "../../Components/common/InputField";
import Button from "../../Components/common/Button";
import { useLocation } from "react-router";
import { selectedContact } from "../../utils/selectedContact";
import { updateContacts } from "../../Services/contacts.service";
import {
  updateContactFailure,
  updateContactRequest,
  updateContactSuccess,
} from "../../actions/contacts.actions";
import Header from "../../Components/common/Header";

export default function EditContacts(props) {
  const { state } = useLocation();
  const { id } = state;
  const [contactInfo, setContactInfo] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tailwindClasses = {
    formContainer:
      "w-full max-w-md    m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16",
    formHeading: "text-2xl  font-medium text-primary mt-4 mb-12 text-center",
    btnContainer: "flex justify-center items-center mt-6",
  };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(updateContactRequest());

      let email = e.target.elements.email?.value;
      let name = e.target.elements.name?.value;
      let phone = e.target.elements.phone?.value;
      let address = e.target.elements.address?.value;

      const contacts = {};
      contacts["name"] = name;
      contacts["phone"] = phone;

      if (email) {
        contacts["email"] = email;
      }

      if (address) {
        contacts["address"] = address;
      }

      contacts["photo"] = contactInfo.photo;

      let data = await updateContacts(id, contacts);
      if (data) {
        dispatch(updateContactSuccess());
        navigate("/");
      }
    } catch (err) {
      dispatch(updateContactFailure());
    }
  };

  useEffect(() => {
    const contacts = selectedContact(id);
    setContactInfo(contacts);
  }, []);

  return (
    <div>
      <Header />
      <div className={tailwindClasses.formContainer}>
        <AuthenticationTitle
          titleClass={tailwindClasses.formHeading}
          title="Edit Contacts"
        />

        <form onSubmit={handleFormSubmit}>
          <InputField
            defaultValue={contactInfo.name}
            htmlFor="name"
            id="name"
            label="Name"
            type="text"
            placeholder="Contact Name"
          />

          <InputField
            defaultValue={contactInfo.email}
            htmlFor="email"
            id="email"
            label="Email"
            type="email"
            placeholder="Contact Email"
          />

          <InputField
            defaultValue={contactInfo.address}
            htmlFor="address"
            id="address"
            label="Address"
            type="text"
            placeholder="Contact Address"
          />

          <InputField
            defaultValue={contactInfo.phone}
            htmlFor="phone"
            id="phone"
            label="phone"
            type="tel"
            placeholder="Contact Phone"
          />

          <div className={tailwindClasses.btnContainer}>
            <Button buttonLabel="Edit" />
          </div>
        </form>
      </div>
    </div>
  );
}
