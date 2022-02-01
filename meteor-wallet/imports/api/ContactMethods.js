import ContactCollection from "./ContactCollection";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

Meteor.methods({
  "contacts.insert"({ name, email, imageUrl }) {
    check(name, String);
    check(email, String);
    check(imageUrl, String);
    if (!name) {
      throw new Meteor.Error("name is required");
    }
    return ContactCollection.insert({ name, email, imageUrl });
  },
  "contacts.remove"({ contactId }) {
    check(contactId, String);
    return ContactCollection.remove(contactId);
  },
});
