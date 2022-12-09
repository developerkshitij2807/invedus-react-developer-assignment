import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Editcontact = () => {
  const [contact, setContact] = useState({
    name: "",
    phoneNumber: "",
    phoneType: "",
    isWhatsapp: false,
    profilePicture: "",
  });

  const navigate = useNavigate();

  const handleSaveClick = (e) => {
    e.preventDefault();
    const contacts = JSON.parse(localStorage.getItem("savedContacts"));
    const contactIndex = JSON.parse(localStorage.getItem("editContactIndex"));
    contacts[contactIndex] = contact;
    localStorage.setItem("savedContacts", JSON.stringify(contacts));
    navigate("/");
  };

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("savedContacts"));
    const contactIndex = JSON.parse(localStorage.getItem("editContactIndex"));
    setContact(contacts[contactIndex]);
  }, []);
  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 mx-auto my-10"
      onSubmit={handleSaveClick}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={(e) => {
            setContact({ ...contact, name: e.target.value });
          }}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Phone Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Phone Number"
          value={contact.phoneNumber}
          onChange={(e) => {
            setContact({ ...contact, phoneNumber: e.target.value });
          }}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Phone Type
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phoneType"
          type="text"
          placeholder="Phone Type"
          value={contact.phoneType}
          onChange={(e) => {
            setContact({ ...contact, phoneType: e.target.value });
          }}
        />
      </div>
      <div className="mb-4">
        <label className="md:w-2/3 block text-gray-500 font-bold flex align-items-center">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            checked={contact.isWhatsapp}
            onChange={(e) =>
              setContact({ ...contact, isWhatsapp: e.target.checked })
            }
          />
          <span className="text-sm">Is this Your Whatsapp Number ?</span>
        </label>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="profilePicture"
        >
          Profile Picture
        </label>
        <input
          type="file"
          onChange={(e) => {
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function () {
              setContact({ ...contact, profilePicture: reader.result });
            };
          }}
        />
      </div>
      <div className="mb-4 text-right">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Editcontact;
