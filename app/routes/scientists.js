import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['this person', 'that person', 'some scientist'];
  }
});
