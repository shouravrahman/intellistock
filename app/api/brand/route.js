import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { title } = await req.json();

		const brand = await db.brand.create({
			data: { title },
		});

		// Logic to save the brand in the database can be added here

		return NextResponse.json(brand);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to create a brand",
			},
			{ status: 500 }
		);
	}
}
