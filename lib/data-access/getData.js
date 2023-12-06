export async function getData(endpoint) {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`,
			{
				cache: "no-store",
			}
		);
		const data = await response.json();
		return data;
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}
