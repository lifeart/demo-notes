import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('tag', { path: 'tags/:tag_id'} , function() {
    this.route('note', { path: 'notes/:note_id'});
  });
});

Router.reopen({
  location: 'hash'
});