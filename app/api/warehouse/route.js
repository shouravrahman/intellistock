import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { warehouseName, location, description, warehouseType } =
			await req.json();

		const warehouse = { warehouseName, location, description, warehouseType };
		console.log(warehouse);

		return NextResponse.json(warehouse);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to create a warehouse",
			},
			{ status: 500 }
		);
	}
}
