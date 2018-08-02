/**
 * @param {string} nodeName 
 * @param {Object} attributes 
 * @param {HTMLElement | string} children 
 */
export default function hyperscriptVirtualDOM(nodeName, attributes, ...children) {
	return { nodeName, attributes, children };
}