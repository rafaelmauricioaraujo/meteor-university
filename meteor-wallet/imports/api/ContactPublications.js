import { Meteor } from 'meteor/meteor';

import ContactCollection from './ContactCollection';

Meteor.publish("allContacts", function publishContacts() {
  return ContactCollection.find();
});

Meteor.publish("contacts", function publishContacts() {
  return ContactCollection.find({ archived: { $ne: true } });
});
