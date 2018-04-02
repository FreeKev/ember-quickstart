import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['FreeKev', 'Me', 'Linus', 'Touring'];
  }
});
