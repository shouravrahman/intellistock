const handleRequest = async (
	url,
	method = "GET",
	data = null,
	revalidate = null
) => {
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
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
			config,
			{ next: { revalidate: revalidate } }
		);

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
