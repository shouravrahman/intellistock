import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { addedStockQuantity, receivingWarehouseId, notes, referenceNumber } =
			await req.json();

		const addedStock = await db.addstockadjustemnt.create({
			data: {
				addedStockQuantity,
				receivingWarehouseId,
				notes,
				referenceNumber,
			},
		});

		return NextResponse.json(addedStock);
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
