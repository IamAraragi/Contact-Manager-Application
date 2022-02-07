import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllFailure,
  getAllRequest,
  getAllSuccess,
} from "../../actions/contacts.actions";
import Header from "../../Components/common/Header";
import Table from "../../Components/Contacts/Table";
import { getAllContacts } from "../../Services/contacts.service";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const dispatch = useDispatch();

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

  return (
    <div>
      <Header />
      <Table contacts={contacts} />
    </div>
  );
}
