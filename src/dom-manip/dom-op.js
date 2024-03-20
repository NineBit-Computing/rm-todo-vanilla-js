function createElementSlowOperation(options) {
	const newElem = document.createElement(options.tag);
	for (var i = 0; i <= 1000000; i++) {
		newElem.innerHTML = options.innerHTML;
	}
	newElem.style = options.style;
	const anchor = document.getElementById(options.anchor);
	anchor.insertAdjacentElement('afterend', newElem);
	// document.body.insertBefore(newElem, anchor);
}

function showWelcomeMessage(msg) {
	document.getElementById('paraId').innerText = msg;
}

function delegate(callback123) {
	console.log('- delegate heavy lifting work -');
	setTimeout(function () {
		callback123('this is the output of heavy lifting work');
	}, 2000);
}

export { createElementSlowOperation, showWelcomeMessage, delegate };
