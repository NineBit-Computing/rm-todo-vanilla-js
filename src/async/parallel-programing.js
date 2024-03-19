import {
	createElementSlowOperation,
	showWelcomeMessage,
} from '../dom-manip/dom-op.js';

function callbackDemo() {
	console.log('parallel programming: main');

	// setTimeout(function () {
	createElementSlowOperation({
		tag: 'div',
		anchor: 'paraId',
		innerHTML: 'I am injected at Runtime',
		style: 'margin: 4px;',
	});
	// }, 100);

	showWelcomeMessage(`Welcome to NineBit`);
}

window.callbackDemo = callbackDemo;
