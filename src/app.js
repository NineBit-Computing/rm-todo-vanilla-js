import loginApp from './login/login.js';

let counter = 1;
// let counter = 'A';

function initApp() {
	myPrivateFn();
}

function myPrivateFn() {
	console.log('* myPrivateFn');
	const processedValue = loginApp(counter);
	console.log(`initApp value is ${counter} and processedValue is  ${processedValue}`);

	// try {
	// 	const processedValue = loginApp(counter);
	// 	console.log(`initApp value is ${counter} and processedValue is  ${processedValue}`);
	// } catch (ex) {
	// 	console.error(`Error occured while processing:
	// 	${ex.message}
	// 	--
	// 	${ex.stack}
	// 	`);
	// }
}

/**
 * expose only required methods to Public visibility
 */
window.initApp = initApp;