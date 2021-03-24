import Component from '@glimmer/component';
import { action } from '@ember/object';
import { A } from '@ember/array';

export default class MessagesComponent extends Component {
  username = 'Zoey';

  messages = A([
    {
      username: 'Tomster',
      active: true,
      localTime: '4:56pm',
      content: `
        <p>
          Hey Zoey, have you had a chance to look at the EmberConf
          brainstorming doc I sent you?
        </p>
      `
    },
    {
      username: 'Zoey',
      active: true,
      content: `
        <p>Hey!</p>

        <p>
          I love the ideas! I'm really excited about where this year's
          EmberConf is going, I'm sure it's going to be the best one yet.
          Some quick notes:
        </p>

        <ul>
          <li>
            Definitely agree that we should double the coffee budget this
            year (it really is impressive how much we go through!)
          </li>
          <li>
            A blimp would definitely make the venue very easy to find, but
            I think it might be a bit out of our budget. Maybe we could
            rent some spotlights instead?
          </li>
          <li>
            We absolutely will need more hamster wheels, last year's line
            was <em>way</em> too long. Will get on that now before rental
            season hits its peak.
          </li>
        </ul>

        <p>Let me know when you've nailed down the dates!</p>
      `
    }
  ]);

  @action
  addMessage(messageText) {
    this.messages.pushObject({
      username: this.username,
      active: true,
      content: `<p>${ messageText }</p>`
    });
  }
}
