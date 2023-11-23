import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { title, description } = await req.json();

		const category = { title, description };
		console.log(category);

		return NextResponse.json(category);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to create a category",
			},
			{ status: 500 }
		);
	}
}
