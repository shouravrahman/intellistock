import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(req, { params: { id } }) {
	try {
		const { title } = await req.json();

		const brand = await db.brand.update({
			data: { title },
			where: {
				id,
			},
		});

		return NextResponse.json(brand);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to upate brand",
			},
			{ status: 500 }
		);
	}
}
export async function GET(req, { params: { id } }) {
	try {
		const brand = await db.brand.findUnique({ where: { id } });

		return NextResponse.json(brand);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to fetch brand",
			},
			{ status: 500 }
		);
	}
}
