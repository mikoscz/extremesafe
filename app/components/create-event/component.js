import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  store: service(),

  actions:{
    newEvent(){
      let store = this.get('store'),
          title = this.get('title'),
          description = this.get('description'),
          startDate = this.get('startDate'),
          duration = this.get('duration');
      let params = {
        title: title,
        description: description,
        startDate: startDate,
        duration: duration,
      }
      this.sendAction('newEvent',params);
    }
  }
});
