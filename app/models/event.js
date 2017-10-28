import DS from 'ember-data';
import {computed} from 'emberObject';
export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),

  startDate: DS.attr('date'),
  endDate: DS.attr('date'),

  duration: computed('startDate', 'endDate',function(){
    let startDate = this.get('startDate'),
        endDate = this.get('endDate');
    let diffBetween = endDate - startDate;
    return Math.ceil(diffBetween / (1000));
  }),

});
