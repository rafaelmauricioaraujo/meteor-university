import ContactCollection from "./ContactCollection";

Meteor.methods({
  "contacts.insert"({ name, email, imageUrl }) {
    if (!name) {
      throw new Meteor.Error("name is required");
    }
    return ContactCollection.insert({ name, email, imageUrl });
  },
});
