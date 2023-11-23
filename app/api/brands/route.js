import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { brandName } = await req.json();

		const brand = { brandName };
		console.log(brand);

		// Logic to save the brand in the database can be added here

		return NextResponse.json(brand);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to create a brand",
			},
			{ status: 500 }
		);
	}
}
