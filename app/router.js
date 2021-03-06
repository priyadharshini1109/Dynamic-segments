import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('contact',{path:'/contact/:contact_id'});
  //this.route('con');
  this.route('about');
  this.route('error');
});

export default Router;
