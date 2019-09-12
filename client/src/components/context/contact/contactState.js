import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CURRENT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Sabrina Olivo",
        email: "sabrina@olivo.com",
        phone: "111-222-3333",
        type: "personal"
      },
      {
        id: 2,
        name: "Sander Olivo",
        email: "sander@olivo.com",
        phone: "111-444-3333",
        type: "professional"
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Adiciona contatos
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Deleta contatos
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set contato atual
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Limpa contato atual
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update contato
  const updateCurrent = contact => {
    dispatch({ type: UPDATE_CURRENT, payload: contact });
  };

  // Filtro de contatos

  // Limpa filtro de contatos

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateCurrent
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
