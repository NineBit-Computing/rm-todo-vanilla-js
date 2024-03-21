import {
	createElementSlowOperation,
	showWelcomeMessage, delegate
} from '../dom-manip/dom-op.js';
import { getCountries } from '../api/getData.js'

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
	// delegate(function (delegateResponse123) {
	// 	console.log('- received callback, delegateResponse is: ', delegateResponse123);
	// });
	getCountries(function (data) {
		console.log('- I am anonymous Fn, also acting as a callback, the data I received from the delegate method is: ', data);
	});

	console.log('- main thread.. continues with its work 1 - ');
	console.log('- main thread.. continues with its work 2 - ');
}

window.delegateDemo = delegateDemo;

window.callbackDemo = callbackDemo;
