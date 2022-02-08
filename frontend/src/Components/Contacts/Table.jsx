import React from "react";

export default function Table(props) {
  return (
    <table className="min-w-full border-collapse block md:table">
      <thead className="block md:table-header-group">
        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Name
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Address
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Email Address
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Contact
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="block md:table-row-group">
        {props.contacts &&
          props.contacts.map((contact) => (
            <tr
              className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
              key={contact.id}
            >
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {contact.name}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {contact.address}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {contact.email}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {contact.phone}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                  onClick={(e) => props.handleDeleteButtonClick(e, contact.id)}
                >
                  Delete
                </button>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 border border-gray-500 rounded">
                  Favorite
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
