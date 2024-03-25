import businessLayer from './business-layer.js';

// let counter = 1;
let counter = 'A';

function initCallstack() {
	myPrivateFn();
}

function myPrivateFn() {
	// console.log('* myPrivateFn');
	// const processedValue = businessLayer(counter);
	// console.log(`initCallstack value is ${counter} and processedValue is  ${processedValue}`);

	try {
		const processedValue = businessLayer(counter);
		console.log(`initCallstack value is ${counter} and processedValue is  ${processedValue}`);
	} catch (ex) {
		console.error(`
		Handled error: Error thrown at some layer.
		--
		Message in the error is - "${ex.message}"
		--
		Function call stack is - 
		--
		${ex.stack}
		`);
	}
}

/**
 * expose only required methods to Public visibility
 */
window.initCallstack = initCallstack;