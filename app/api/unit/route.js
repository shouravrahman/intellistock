import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { title, abbreviation, defaultUnit } = await req.json();

		const unit = await db.unit.create({
			data: { title, abbreviation, defaultUnit },
		});

		return NextResponse.json(unit);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to create a unit",
			},
			{ status: 500 }
		);
	}
}
