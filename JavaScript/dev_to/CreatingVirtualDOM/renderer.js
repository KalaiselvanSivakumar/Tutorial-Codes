import hyperscript from './hyperscript.js';

// Simple HTML construction

const App1 = () => {
	return hyperscript(
		'h1',
		null,
		'Hello, vDOM!'
	);
};

console.log(App1());


// Somewhat complex HTML construction
const App = (props) => {
	const {list} = props;

	return hyperscript(
		'div',
		{ class: 'app' },
		hyperscript('h1', null, 'Simple vDOM'),
		hyperscript(
			'ul',
			null,
			...list.map(item => hyperscript('li', null, item))
		)
	);
};

console.log(App({
	list: ['Bird', 'Ant', 'Dog']
}));


// Real application
let currentApp;
const render = (state) => {
	const newApp = App(state);
	if (currentApp) {
		document.body.replaceChild(newApp, currentApp);
	}
	else {
		document.body.appendChild(newApp);
	}
	currentApp = newApp;
};

const state = {
	list: [
		'Bird', 'Cat', 'Dog', 'Elephant', 'Ant', 'Lion',
		'Tiger', 'Snake', 'Housefly', 'Cockroach', 'Bee'
	]
};

console.log(render(state));


// Adding content dynamically to the DOM
function getRandomItemFromList(list) {
	let index = Math.round(Math.random() * list.length);
	if (index >= list.length) {
		index = list.length - 1;
	}
	return list[index];
}

setInterval(() => {
	state.list = [
		...state.list,
		getRandomItemFromList(state.list)
	];
	render(state)
}, 1000);
