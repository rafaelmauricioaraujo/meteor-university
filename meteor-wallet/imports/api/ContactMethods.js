import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

import ContactCollection from './ContactCollection';

Meteor.methods({
  "contacts.insert"({ name, email, imageUrl }) {
    check(name, String);
    check(email, String);
    check(imageUrl, String);
    if (!name) {
      throw new Meteor.Error("name is required");
    }
    console.log("contacts");
    return ContactCollection.insert({
      name,
      email,
      imageUrl,
      createdAt: new Date(),
    });
  },
  "contacts.remove"({ contactId }) {
    check(contactId, String);
    return ContactCollection.remove(contactId);
  },
  "contacts.archive"({ contactId }) {
    check(contactId, String);
    ContactCollection.update({ _id: contactId }, { $set: { archived: true } });
  },
});
