import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  avatarUrl: DS.attr('string'),
  name: DS.attr('string'),

  individual: DS.attr('boolean'),
  wheelchair: DS.attr('boolean'),
  spineInjury: DS.attr('boolean'),
  amputation: DS.attr('boolean'),
  cerebralPalsy: DS.attr('boolean')

});
