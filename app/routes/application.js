import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  beforeModel() {
    this._super(...arguments);

    return this.get('session')
      .fetch()
      .catch(() => {
        this.transitionTo('auth.login');
      });
  }
  // session: service(),
  // beforeModel: function() {
  //   return this.get('session').fetch().catch(function() {});
  // },
  // actions: {
  //   signIn: function() {
  //     this.get('session').open('firebase', { provider: 'google'}).then(function(data) {
  //     });
  //   },
  //   signOut: function() {
  //     this.get('session').close();
  //   }
  // }
});
