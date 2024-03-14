import loginApp from './login/login';

function mainApp() {
	const appVal = 100;
	const currentValue = loginApp(appVal);
	console.log(
		'mainApp value is:',
		appVal,
		' and currentValue is ',
		currentValue,
	);
}
