import React, { Fragment, useContext } from "react";
import { Button, Card, Classes, Icon } from "@blueprintjs/core";
import "./ContactItem.css";
import PropTypes from "prop-types";
import ContactContext from "../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { deleteContact } = contactContext;

  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
  };

  return (
    <div className="card">
      <Card className={Classes.DARK}>
        <h3 className="text-primary text-left">
          {name}
          {""}
          <span
            className={
              "badge " +
              (type === "professional" ? "badge-success" : "badge-primary")
            }
          >
            {/* Deixa primeira letra maíscula */}
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </h3>
        <p>
          {email && (
            <div>
              <Icon icon="envelope" style={{ paddingRight: 10 }} />

              {email}
            </div>
          )}
          {phone && (
            <div className="icon">
              <Icon icon="phone" style={{ paddingRight: 10 }} />

              {phone}
            </div>
          )}
        </p>

        <Button style={{ marginRight: 10 }}>Edit</Button>

        <Button type="button" intent="danger" onClick={onDelete}>
          Delete
        </Button>
      </Card>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
