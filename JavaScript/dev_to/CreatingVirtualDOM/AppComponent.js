import hyperscriptVirtualDOM from "./hyperscriptVirtualDOM";
import Component from "./Component";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [
				'Bird', 'Cat', 'Dog', 'Elephant', 'Ant', 'Lion',
				'Tiger', 'Snake', 'Housefly', 'Cockroach', 'Bee'
			]
		};

		this.timer = setInterval (_ => {
			this.setState({
				list: [...this.state.list, getRandomItemFromList(this.state.list)]
			});
		}, 1000);
	}

	render(props, { list }) {
		return hyperscriptVirtualDOM(
			'div', { class: 'app' },
			hyperscriptVirtualDOM('h1', null, 'Simple vDOM'),
			hyperscriptVirtualDOM(
				People, { list }
			)
		);
	}
}

function getRandomItemFromList(list) {
	let index = Math.round(Math.random() * list.length);
	if (index >= list.length) {
		index = list.length - 1;
	}
	return list[index];
}