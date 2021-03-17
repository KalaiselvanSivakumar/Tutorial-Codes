// import { helper } from '@ember/component/helper';
import Helper from '@ember/component/helper';

// function substring([string, start, end]) {

// function substring([ string ], { start, end }) {
//   return string.substring(start || 0, end);
// }

// export default helper(substring);

export default class Substring extends Helper {
  compute([ string ], { start, end }) {
    return string.substring(start || 0, end);
  }
}
