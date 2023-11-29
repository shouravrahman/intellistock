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
export async function GET() {
	try {
		const units = await db.unit.findMany();

		return NextResponse.json(units);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to fetch units",
			},
			{ status: 500 }
		);
	}
}
export async function PUT(req) {
	try {
		const { id, title, abbreviation, defaultUnit } = await req.json();

		const updatedUnit = await db.unit.update({
			where: { id },
			data: { title, abbreviation, defaultUnit },
		});

		return NextResponse.json(updatedUnit);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to update the unit",
			},
			{ status: 500 }
		);
	}
}
export async function DELETE(req) {
	try {
		const { id } = await req.json();

		await db.unit.delete({
			where: { id },
		});

		return NextResponse.json({ message: "Unit deleted successfully" });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to delete the unit",
			},
			{ status: 500 }
		);
	}
}
