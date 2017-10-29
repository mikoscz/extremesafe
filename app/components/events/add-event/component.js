import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  store: service(),
  router: service(),
  session: service(),

  sports: [
    { name: 'Downhill 4-Cross Biking' },
    { name: 'SitSki' },
    { name: 'Wheelchair Skateboarding' },
    { name: 'Skydiving Wheelchair' },
    { name: 'Climbing' }
  ],

  actions: {
    addEvent() {
      const newEvent = {
        title: this.get('name'),
        description: this.get('description'),
        startDate: this.get('date'),
        creator: this.get('session.currentUser')
      };

      this.get('store')
        .createRecord('event', newEvent)
        .save()
        .then(() => {
          this.get('router').transitionTo('events');
        })
    }
  }
});
