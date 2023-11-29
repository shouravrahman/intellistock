// api/items.js
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		// const {
		// 	title,
		// 	description,
		// 	category,
		// 	sku,
		// 	barcode,
		// 	quantity,
		// 	unit,
		// 	brand,
		// 	buyingPrice,
		// 	sellingPrice,
		// 	suppliers,
		// 	reorderPoint,
		// 	warehouse,
		// 	imageUrl,
		// 	weight,
		// 	dimensions,
		// 	taxRate,
		// 	notes,
		// } = await req.json();
		const itemData = await req.json();

		const item = await db.item.create({
			data: {
				...itemData,
			},
		});

		return NextResponse.json(item);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to create a new item",
			},
			{ status: 500 }
		);
	}
}
