import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  store: service(),
  showForm: false,
    actions:{
      showForm(){
        this.set('showForm', true);
      },
      editEvent(event){

        let title = this.get('title'),
            description = this.get('description'),
            startDate = this.get('startDate'),
            duration = this.get('duration');
        let params = {
          title: title,
          description: description,
          startDate: startDate,
          duration: duration,
        }
        this.sendAction('editEvent', event, params);

        this.set('showForm', false);
      }
    }
});
