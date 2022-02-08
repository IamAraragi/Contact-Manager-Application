import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  deleteContactFailure,
  deleteContactRequest,
  deleteContactSucess,
  getAllFailure,
  getAllRequest,
  getAllSuccess,
} from "../../actions/contacts.actions";
import Header from "../../Components/common/Header";
import Table from "../../Components/Contacts/Table";
import { getAllContacts } from "../../Services/contacts.service";
import { deleteContacts } from "../../Services/contacts.service";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addContactClickHandler = (e) => {
    e.preventDefault();
    navigate("/add");
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

  useEffect(() => {
    const getContacts = async () => {
      try {
        dispatch(getAllRequest());
        const allContacts = await getAllContacts();
        setContacts(allContacts);
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
      <Header />
      <Table
        contacts={contacts}
        handleDeleteButtonClick={handleDeleteButtonClick}
      />
      <div>
        <button onClick={(e) => addContactClickHandler(e)}>
          Create Contact
        </button>
      </div>
    </div>
  );
}
