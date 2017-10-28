import Route from '@ember/routing/route';

export default Route.extend({

  model(){
    return this.get('store').findAll('event');
  },

  actions: {
    newEvent(params){
    let event =  this.store.createRecord('event', params);
    event.save();
    }
  }
});
