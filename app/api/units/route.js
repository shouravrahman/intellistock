import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { unitName, abbreviation, defaultUnit } = await req.json();

		const unit = { unitName, abbreviation, defaultUnit };
		console.log(unit);

		return NextResponse.json(unit);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to create a unit",
			},
			{ status: 500 }
		);
	}
}
