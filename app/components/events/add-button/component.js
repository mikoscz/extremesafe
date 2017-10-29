import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),

  actions: {
    navigate(path) {
      return this.get('router').transitionTo(path);
    }
  }
});
