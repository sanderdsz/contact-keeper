import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  REMOVE_ALERT,
  SET_ALERT,
  UPDATE_CURRENT,
  FILTER_CONTACTS,
  CLEAR_CURRENT,
  DELETE_CONTACT
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
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Adiciona contatos

  // Deleta contatos

  // Set contato atual

  // Limpa contato atual

  // Update contato

  // Filtro de contatos

  // Limpa filtro de contatos

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
