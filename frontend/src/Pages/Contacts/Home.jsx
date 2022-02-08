import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../actions/auth.actions";
import {
  deleteContactFailure,
  deleteContactRequest,
  deleteContactSucess,
  getAllFailure,
  getAllRequest,
  getAllSuccess,
  updateContactFailure,
  updateContactRequest,
  updateContactSuccess,
} from "../../actions/contacts.actions";
import Header from "../../Components/common/Header";
import Table from "../../Components/Contacts/Table";
import {
  getAllContacts,
  updateContacts,
} from "../../Services/contacts.service";
import { deleteContacts } from "../../Services/contacts.service";
import { sortTable } from "../../utils/sortTable";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOutButtonClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    localStorage.removeItem("contacts");
    dispatch(logout());
  };

  const addContactClickHandler = (e) => {
    e.preventDefault();
    navigate("/add");
  };

  const handleEditButtonClick = (e, contactId) => {
    e.preventDefault();
    navigate("/edit", { state: { id: contactId } });
  };

  const handleDeleteButtonClick = async (e, contactId) => {
    try {
      e.preventDefault();
      dispatch(deleteContactRequest());
      const data = await deleteContacts(contactId);
      setContacts(data);
      dispatch(deleteContactSucess());
    } catch (err) {
      dispatch(deleteContactFailure());
    }
  };

  const handleFavoriteButtonClick = async (e, contactId, contactInfo) => {
    try {
      e.preventDefault();
      dispatch(updateContactRequest());
      contactInfo.favorites = !contactInfo.favorites;
      const { id, ...updatedContactInfo } = contactInfo;

      let data = await updateContacts(contactId, updatedContactInfo);
      if (data) {
        const allContacts = await getAllContacts();
        const sortedContacts = sortTable(allContacts);
        setContacts(sortedContacts);
        dispatch(updateContactSuccess());
      }
    } catch (err) {
      dispatch(updateContactFailure());
    }
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        dispatch(getAllRequest());
        const allContacts = await getAllContacts();
        const sortedContacts = sortTable(allContacts);
        setContacts(sortedContacts);
        dispatch(getAllSuccess());
      } catch (err) {
        dispatch(getAllFailure());
      }
    };

    getContacts();
  }, [dispatch]);

  useEffect(() => {}, [contacts]);

  return (
    <div>
      <Header handleLogOutButtonClick={handleLogOutButtonClick} />
      <Table
        contacts={contacts}
        handleDeleteButtonClick={handleDeleteButtonClick}
        handleEditButtonClick={handleEditButtonClick}
        handleFavoriteButtonClick={handleFavoriteButtonClick}
      />
      <div>
        <button onClick={(e) => addContactClickHandler(e)}>
          Create Contact
        </button>
      </div>
    </div>
  );
}
