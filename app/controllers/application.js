import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),

  actions: {
    navigate(path, toggleMenu) {
      if (toggleMenu) {
        this.toggleProperty('leftSideBarLockedOpen');
      }

      this.get('router').transitionTo(path);
    },

    toggleMenu() {
      this.toggleProperty('leftSideBarLockedOpen');
    },

    signOut() {
      return this.get('session')
        .close()
        .then(() => {
          this.toggleProperty('leftSideBarLockedOpen');
          this.get('router').transitionTo('auth.login');
        })
    }
  }
});
