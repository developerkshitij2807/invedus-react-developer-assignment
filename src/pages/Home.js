import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contactscomponent from "../component/Contactscomponent";
import Navbar from "../component/Navbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      {!JSON.parse(localStorage.getItem("savedContacts")) ? (
        <p>No Contacts present</p>
      ) : (
        <Contactscomponent
          data={JSON.parse(localStorage.getItem("savedContacts"))}
        />
      )}
      <div className="w-full text-right pr-5">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/add-contact")}
        >
          Add contacts
        </button>
      </div>
    </div>
  );
};

export default Home;
