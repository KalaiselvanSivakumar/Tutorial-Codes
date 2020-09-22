import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Dennis Ritchie', 'Linus Torvalds', 'Bjarne Stroustrup', 'Tim Berners-Lee'];
  }
}
