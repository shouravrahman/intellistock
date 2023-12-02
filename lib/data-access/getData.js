export async function getData(endpoint) {
	try {
		const BASE_URL = "http://localhost:3000";
		const response = await fetch(`${BASE_URL}/api/${endpoint}`, {
			cache: "no-store",
		});
		const data = await response.json();
		return data;
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}
