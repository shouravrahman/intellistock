import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const {
			addedStockQuantity,
			receivingWarehouseId,
			notes,
			referenceNumber,
			itemId,
		} = await req.json();

		const addedStock = await db.addStockAdjustment.create({
			data: {
				addedStockQuantity,
				receivingWarehouseId,
				notes,
				referenceNumber,
				itemId,
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
export async function GET() {
	try {
		const adjustements = await db.addStockAdjustment.findMany();

		return NextResponse.json(adjustements);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to fetch adjustements",
			},
			{ status: 500 }
		);
	}
}