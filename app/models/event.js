import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),

  startDate: DS.attr(),
  duration: DS.attr('string'),

  creator: DS.belongsTo('user')
});
