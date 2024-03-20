import {
	createElementSlowOperation,
	showWelcomeMessage, delegate
} from '../dom-manip/dom-op.js';

function callbackDemo() {
	console.log('parallel programming: main');

	setTimeout(function () {
		createElementSlowOperation({
			tag: 'div',
			anchor: 'paraId',
			innerHTML: 'I am injected at Runtime',
			style: 'margin: 4px;',
		});
	}, 100);

	showWelcomeMessage(`Welcome to NineBit`);
}

function delegateDemo() {
	console.log('- main thread.. delegateDemo - ');
	delegate(function (delegateResponse) {
		console.log('- received callback, delegateResponse is: ', delegateResponse);
	});
	console.log('- main thread.. continues with its work 1 - ');
	console.log('- main thread.. continues with its work 2 - ');
}

window.delegateDemo = delegateDemo;

window.callbackDemo = callbackDemo;
