import React from "react";
import "./Home.css";
import Contacts from "../components/contacts/Contacts";
import ContactForm from "../components/contacts/ContactForm";
import ContactFilter from "../components/contacts/ContactFilter";

const Home = () => {
  return (
    <div className="home-background">
      <div className="grid-2">
        <div>
          <ContactForm />
        </div>
        <div>
          <ContactFilter />
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Home;
