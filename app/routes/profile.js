import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  model() {
    // const uid = this.get('session.currentUser.uid');
    // return this.store.findRecord('user', uid);
    return this.get('session.currentUser');
  }
});
