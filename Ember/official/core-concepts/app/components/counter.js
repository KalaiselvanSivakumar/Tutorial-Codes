import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  @tracked count = 0;

  get total() {
    return this.count * this.args.multiple;
  }

  @action
  change(amount) {
    this.count = this.count + amount;
  }

  @action
  multiply() {
    this.args.updateMultiple(this.args.multiple * 2);
  }
}
