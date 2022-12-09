import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";

const Addcontact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    phoneType: "",
    isWhatsapp: false,
    profilePicture: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const currStorage = JSON.parse(localStorage.getItem("savedContacts"));
    console.log(currStorage, formData);
    if (currStorage) {
      currStorage.push(formData);
      localStorage.setItem("savedContacts", JSON.stringify(currStorage));
    } else {
      localStorage.setItem("savedContacts", JSON.stringify([formData]));
    }

    navigate("/");
  };

  return (
    <>
      <Navbar />
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 mx-auto my-10"
        onSubmit={handleSubmit}
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
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="number"
          >
            Phone number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="number"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="number"
          >
            Type
          </label>
          <select
            className="block appearance-none w-full py-3 px-4 pr-8 rounded leading-tight border-gray-100 outline-gray-100"
            id="grid-state"
            onChange={(e) =>
              setFormData({ ...formData, phoneType: e.target.value })
            }
            defaultValue={"Personal"}
          >
            <option>Personal</option>
            <option>Office</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="md:w-2/3 block text-gray-500 font-bold flex align-items-center">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              value={formData.isWhatsapp}
              onChange={(e) =>
                setFormData({ ...formData, isWhatsapp: e.target.checked })
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
                setFormData({ ...formData, profilePicture: reader.result });
              };
            }}
          />
        </div>
        <div className="mb-4 text-right">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Addcontact;
