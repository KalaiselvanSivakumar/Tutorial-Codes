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

const state = {
	list: [
		'Bird', 'Cat', 'Dog', 'Elephant', 'Ant', 'Lion',
		'Tiger', 'Snake', 'Housefly', 'Cockroach', 'Bee'
	]
};

const newApp = renderNode(App(state));
