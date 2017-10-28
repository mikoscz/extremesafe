import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    signIn() {
      // debugger
      // this.get('session').open('google-oauth2').then(function(){
      //   debugger;
      // }, (error) => {
      //   // controller.set('error', 'Could not sign you in: '+error.message);
      // });
    }
  }
});
