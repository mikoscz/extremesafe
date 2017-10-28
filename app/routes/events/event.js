import Route from '@ember/routing/route';

export default Route.extend({

  model(param){
    return this.get('store').findRecord('event', param.event_id);
  },
  actions:{
    editEvent(event,params){
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          event.set(key,params[key]);
        }
      });
        event.save();
        this.transitionTo(`events/${event.id}`);
    }
  }
});
