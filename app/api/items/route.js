// api/items.js
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		// const {
		// 	itemName,
		// 	description,
		// 	category,
		// 	sku,
		// 	barcode,
		// 	quantity,
		// 	unit,
		// 	brand,
		// 	unitPrice,
		// 	costPrice,
		// 	supplier,
		// 	reorderPoint,
		// 	warehouse,
		// 	imageUrl,
		// 	weight,
		// 	dimensions,
		// 	taxRate,
		// 	notes,
		// } = await req.json();
		const data = await req.json();

		// const newItem = {
		// 	itemName,
		// 	description,
		// 	category,
		// 	sku,
		// 	barcode,
		// 	quantity,
		// 	unit,
		// 	brand,
		// 	unitPrice,
		// 	costPrice,
		// 	supplier,
		// 	reorderPoint,
		// 	warehouse,
		// 	imageUrl,
		// 	weight,
		// 	dimensions,
		// 	taxRate,
		// 	notes,
		// };

		console.log(data);

		return NextResponse.json(data);
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
