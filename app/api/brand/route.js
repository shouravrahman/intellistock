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
export async function GET() {
	try {
		const brands = await db.brand.findMany();

		return NextResponse.json(brands);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to fetch brands",
			},
			{ status: 500 }
		);
	}
}
export async function DELETE(req) {
	try {
		const { id } = await req.json();

		await db.brand.delete({
			where: { id },
		});

		return NextResponse.json({ message: "Brand deleted successfully" });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to delete the brand",
			},
			{ status: 500 }
		);
	}
}
