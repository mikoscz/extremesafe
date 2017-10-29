import Component from '@ember/component';
import { inject as service } from '@ember/service'

export default Component.extend({
  session: service(),
  router: service(),

  classNames: ['user-profile profile'],
  actions: {
    saveProfile() {
      this.get('user')
        .save()
        .then(() => {
          this.get('router').transitionTo('events');
        });
    }
  }
});
