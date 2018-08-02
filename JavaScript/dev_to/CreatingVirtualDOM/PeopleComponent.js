import hyperscriptVirtualDOM from "./hyperscriptVirtualDOM.js";
import Component, { renderComponent } from "./Component.js";

class People extends Component {

	constructor(props) {
		super(props);

		this.state = {
			list: [
				'🕺', '💃', '😀', '🙋‍', '💼',
				'🕶️️', '👏', '🤳', '🕵️', '👩‍🔧'
			  ]
		};

		this.timer = setInterval (_ => {
			this.setState({
				list: [...this.state.list, getRandomItemFromList(this.state.list)]
			});
		}, 1000);
	}

	render(props, state) {
		return hyperscriptVirtualDOM(
			'ul', null,
			...state.list.map(item => hyperscriptVirtualDOM(
				'li', null, item
			))
		);
	}
}

class App extends Component {
	render() {
		return hyperscriptVirtualDOM(
			'div', {class: 'app'},
			hyperscriptVirtualDOM('h1', null, 'Simple vDOM'),
			hyperscriptVirtualDOM(People)
		);
	}
}

function getRandomItemFromList(list) {
	let index = Math.round(Math.random() * (list.length - 1));
	return list[index];
}

renderComponent(new App(), document.querySelector('#root'));
