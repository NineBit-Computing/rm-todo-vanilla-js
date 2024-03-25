import {
	createElementSlowOperation,
	showWelcomeMessage, delegate
} from '../dom-manip/dom-op.js';
import { getCountries } from '../api/getData.js'

function callstackDemo() {
	console.log('main callstack: statement 1');

	setTimeout(function () {
		console.log('Callback Queue: statement 2 inside setTimeout');
		createElementSlowOperation({
			tag: 'div',
			anchor: 'paraId',
			innerHTML: 'I am injected at Runtime',
			style: 'margin: 4px;',
		});
	}, 100);

	console.log('main callstack: statement 3');
	showWelcomeMessage(`Welcome to NineBit`);
}

function delegateDemo() {
	console.log('main callstack: statement 1');
	// delegate(function (delegateResponse123) {
	// 	console.log('- received callback, delegateResponse is: ', delegateResponse123);
	// });
	getCountries(/*I am an anonymous Fn, also acting as a callback.*/function (data) {
		console.log('Callback Queue: statement 2. Data from the delegate method: ', data);
	});

	console.log('main callstack: statement 3');
	console.log('main callstack: statement 4');
}

window.callstackDemo = callstackDemo;
window.delegateDemo = delegateDemo;
