import React from 'react';

import {
  useFind,
  useSubscribe,
} from 'meteor/react-meteor-data';

import ContactCollection from '../api/ContactCollection';

export default ContactList = () => {
  const isLoading = useSubscribe("contacts");

  const contactList = useFind(() =>
    ContactCollection.find(
      { archived: { $ne: true } },
      { sort: { createdAt: -1 } }
    )
  );

  console.log(contactList);

  const archiveContact = (event, _id) => {
    event.preventDefault();
    Meteor.call("contacts.archive", { contactId: _id });
  };

  if (isLoading()) {
    return <h2>is loading...</h2>;
  }

  const ContactItem = ({ contact }) => {
    return (
      <li
        key={contact._id}
        className="py-4 flex items-center justify-between space-x-3"
      >
        <div className="min-w-0 flex-1 flex items-center space-x-3">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={contact.imageUrl}
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900 truncate">
              {contact.name}
            </p>
            <p className="text-sm font-medium text-gray-500 truncate">
              {contact.email}
            </p>
            <a href="#" onClick={(event) => archiveContact(event, contact._id)}>
              Archive
            </a>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div>
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Contact List
        </h3>
        <ul
          role="list"
          className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
        >
          {contactList.map((contact) => {
            return <ContactItem key={contact.id} contact={contact} />;
          })}
        </ul>
      </div>
    </div>
  );
};
