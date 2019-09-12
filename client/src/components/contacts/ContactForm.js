import React, { useState, useContext, useEffect } from "react";
import {
  FormGroup,
  InputGroup,
  RadioGroup,
  Radio,
  Button
} from "@blueprintjs/core";
import ContactContext from "../context/contact/contactContext";

import "./ContactForm.css";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateCurrent, clearCurrent, current } = contactContext;

  /*  Quando clicar no botão edit será
       preenchido o formulário com (contact) */

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  // Função que realiza adição
  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateCurrent(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form">
        <div className="text-primary">
          {current ? "Edit Contact" : "Add Contact"}
          {/* Formulários */}

          <input
            type="text"
            className="bp3-input"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
          <input
            type="text"
            className="bp3-input"
            placeholder="E-mail"
            name="email"
            value={email}
            onChange={onChange}
          />
          <input
            type="text"
            className="bp3-input"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={onChange}
          />

          {/* Botões RADIO */}
          <div className="radio">
            <label className="bp3-control bp3-radio">
              <input
                onChange={onChange}
                type="radio"
                name="type"
                value="personal"
                checked={type === "personal"}
              />
              <span className="bp3-control-indicator"></span>
              Personal
            </label>
            <label className="bp3-control bp3-radio">
              <input
                onChange={onChange}
                type="radio"
                name="type"
                value="professional"
                checked={type === "professional"}
              />
              <span className="bp3-control-indicator"></span>
              Professional
            </label>
          </div>
          <input
            type="submit"
            value={current ? "Update Contact" : "Add Contact"}
          />
          {current && (
            <div>
              <button onClick={clearAll}>Clear</button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
