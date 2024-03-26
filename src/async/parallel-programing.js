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
	// callbacks should take error as the first parameter. general std
	getCountries(/*I am an anonymous Fn, also acting as a callback.*/function (myErr, myData) {
		if (myErr) {
			console.error(`Callback Queue: statement 2. Error Handled: ${myErr}`);
		} else {
			console.log('Callback Queue: statement 2. Data from the delegate method: ', myData);
		}
	});

	console.log('main callstack: statement 3');
	console.log('main callstack: statement 4');
}

window.callstackDemo = callstackDemo;
window.delegateDemo = delegateDemo;
