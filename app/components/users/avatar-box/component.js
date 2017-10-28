import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
  avatar: alias('user.avatarUrl'),
  classNames: ['pd-top-25']
});
