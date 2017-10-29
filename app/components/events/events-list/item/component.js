import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  session: service(),
  router: service(),

  canJoin: computed('session.currentUser', function() {
    return this.get('event.creator.uid') != this.get('session.currentUser.uid');
  }),

  actions: {
    toEvent(event) {
      this.get('router').transitionTo('events.event', event);
    }
  }
});
