import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { transferStock, receivingBranchId, notes } = await req.json();

		const adjustment = { transferStock, receivingBranchId, notes };
		console.log(adjustment);

		return NextResponse.json(adjustment);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to create a adjustment",
			},
			{ status: 500 }
		);
	}
}
