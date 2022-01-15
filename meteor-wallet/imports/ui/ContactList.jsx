import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import ContactCollection from "../api/ContactCollection";

export default ContactList = () => {
  const contactList = useTracker(() => {
    return ContactCollection.find({}).fetch();
  });
  return (
    <>
      <h2>Contact List</h2>
      <ul>
        {contactList.map((contact) => (
          <li key={contact.email}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </>
  );
};
