import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { title, location, description, warehouseType } = await req.json();

		const warehouse = await db.warehouse.create({
			data: { title, location, description, warehouseType },
		});

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
