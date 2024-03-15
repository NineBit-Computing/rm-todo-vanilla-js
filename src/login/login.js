import dashboardApp from "../dashboard/dashboard.js";

export default function loginApp(valParam) {
	
	const incrementedValue = valParam + 1;
	return dashboardApp(incrementedValue);
}
