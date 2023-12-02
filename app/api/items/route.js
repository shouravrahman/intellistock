// api/items.js
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const {
			title,
			description,
			category,
			sku,
			barcode,
			quantity,
			unit,
			brand,
			buyingPrice,
			sellingPrice,
			suppliers,
			reorderPoint,
			warehouse,
			imageUrl,
			weight,
			dimensions,
			taxRate,
			notes,
		} = await req.json();

		const item = await db.item.create({
			data: {
				title,
				description,
				category: { connect: { id: category } },
				sku,
				barcode,
				quantity,
				unit: { connect: { id: unit } },
				brand: { connect: { id: brand } },
				buyingPrice,
				sellingPrice,
				suppliers: { connect: { id: suppliers } },
				reorderPoint,
				warehouse: { connect: { id: warehouse } },
				imageUrl,
				weight,
				dimensions,
				taxRate,
				notes,
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
export async function GET() {
	try {
		const items = await db.item.findMany();

		return NextResponse.json(items);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to fetch Items",
			},
			{ status: 500 }
		);
	}
}
