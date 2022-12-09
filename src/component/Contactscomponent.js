import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Contactscomponent = ({ data }) => {
  const [contacts, setContacts] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const navigate = useNavigate();

  const handleDelete = (idx) => {
    console.log("Deleted", idx);
    const newData = contacts.filter((_, index) => idx !== index);
    localStorage.setItem("savedContacts", JSON.stringify(newData));
    setContacts(newData);
  };

  const handleEditClick = (index) => {
    const contact = contacts[index];
    localStorage.setItem("editContactIndex", JSON.stringify(index));
    navigate("/edit-contact");
  };
  useEffect(() => {
    setContacts(data);
  }, []);
  return (
    <>
      <div className="my-5">
        <table className="table-auto w-full text-center">
          <thead>
            <tr className="border border-black">
              <th></th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Phone Type</th>
              <th>Is Whatsapp Number ?</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr className="border border-black py-5" key={index}>
                <td className="items-center">
                  <img src={contact.profilePicture} className="w-20" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.phoneType}</td>
                <td>{`${contact.isWhatsapp}`}</td>
                <td>
                  <button
                    type="button"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => handleEditClick(index)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              Modal body text goes here.
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactscomponent;
