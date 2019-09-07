import React from "react";
import "./Home.css";
import Contacts from "../components/contacts/Contacts";

const Home = () => {
  return (
    <div className="home-background">
      <div className="grid-2">
        <div></div>
        <div>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Home;
