import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(req, { params: { id } }) {
	try {
		const { title } = await req.json();

		const category = await db.category.update({
			data: { title },
			where: {
				id,
			},
		});

		return NextResponse.json(category);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to upate category",
			},
			{ status: 500 }
		);
	}
}
export async function GET(req, { params: { id } }) {
	try {
		const category = await db.category.findUnique({ where: { id } });

		return NextResponse.json(category);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to fetch category",
			},
			{ status: 500 }
		);
	}
}
