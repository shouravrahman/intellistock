import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const {
			receivingWarehouseId,
			itemId,
			transferStock,
			givingWarehouseId,
			notes,
			referenceNumber,
		} = await req.json();

		const adjustment = await db.transferStockAdjustment.create({
			data: {
				receivingWarehouseId,
				transferStock,
				givingWarehouseId,
				notes,
				itemId,
				referenceNumber,
			},
		});
		console.log(adjustment);

		return NextResponse.json(adjustment);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to create a transfer",
			},
			{ status: 500 }
		);
	}
}
export async function GET() {
	try {
		const adjustements = await db.transferStockAdjustment.findMany();

		return NextResponse.json(adjustements);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to fetch adjustments",
			},
			{ status: 500 }
		);
	}
}
