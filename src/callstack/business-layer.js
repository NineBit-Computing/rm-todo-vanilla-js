import dataLayer from "./data-layer.js";

export default function businessLayer(valParam) {
	const incrementedValue = valParam + 1;
	return dataLayer(incrementedValue);
}
