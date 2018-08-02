export default class Component {
	constructor (props) {
		this.props = props;
		this.state = {};
	}

		setState(state) {
			this.state = Object.assign({}, state);
			renderComponent(this);
		}
}

export const renderComponent = (component, parent) => {
	const oldBase = component.base;
	component.base = renderNode(
		component.render(component.props, component.state)
	);
	if (parent) {
		parent.appendChild(component.base);
	}
	else {
		oldBase.parentNode.replaceChild(component.base, oldBase);
	}
};

const renderNode = vNode => {
	/**
	 * @type {HTMLElement} el
	 */
	let el;
	if (vNode.split) {
		return document.createTextNode(vNode);
	}
	const { nodeName, attributes, children } = vNode;
	if (typeof nodeName === 'string') {
		el = document.createElement(nodeName);
		for (let key in attributes) {
			el.setAttribute(key, attributes[key]);
		}
	}
	else if (typeof nodeName === 'function') {
		const component = new nodeName(attributes);
		el = renderNode(
			component.render(component.props, component.state)
		);

		component.base = el;
	}
	(children || []).forEach(child => {
		el.appendChild(renderNode(child));
	});
	return el;
};
