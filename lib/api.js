const BASE_URL = "http://localhost:3000"; // Adjust the base URL

const handleRequest = async (url, method = "GET", data = null) => {
	const config = {
		method,
		headers: {
			"Content-Type": "application/json",
			// Add any other headers you need
		},
	};

	if (data) {
		config.body = JSON.stringify(data);
	}

	try {
		const response = await fetch(`${BASE_URL}${url}`, config);

		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error(error);
		throw error; // Propagate the error to the caller
	}
};

export default handleRequest;
