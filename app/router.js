import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('auth', function() {
    this.route('login');
  });
  this.route('events', function() {
    this.route('event', {path: ':event_id'});
    this.route('add');
  });
  this.route('profile');
});

export default Router;
