export default function dashboardApp(valParam) {
	if (typeof valParam !== 'number') {
		throw new Error('Invalid Input. Only numbers allowed');
	} else {
		const incrementedValue = valParam + 1;
		return incrementedValue;
	}
}
