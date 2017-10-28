import Component from '@ember/component';
import { inject as service } from '@ember/service'

export default Component.extend({
  session: service(),

  classNames: ['user-profile'],

  actions: {
    saveProfile() {
      this.get('user.save');
    }
  }
});
