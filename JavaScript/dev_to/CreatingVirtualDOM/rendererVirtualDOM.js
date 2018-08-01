export const renderNode = vNode => {
	/**
	 * @type {HTMLElement} el
	 */
	let el;

	if (vNode.split) {
		return document.createTextNode(vNode);
	}

	const { nodeName, attributes, children } = vNode;

	el = document.createElement(nodeName);

	for (let key in attributes) {
		el.setAttribute(key, attributes[key]);
	}

	(children || []).forEach(child => {
		el.appendChild(renderNode(child));
	});

	return el;

};

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
}

const newApp = renderNode(App(state));
