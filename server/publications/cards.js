import { Cards } from 'models';

Meteor.publish('card', (cardId) => {
  check(cardId, String);
  return Cards.find({ _id: cardId });
});
