import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { title, description } = await req.json();

		const category = await db.category.create({
			data: { title, description },
		});

		console.log(category);

		return NextResponse.json(category);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to create a category",
			},
			{ status: 500 }
		);
	}
}
export async function GET(req) {
	try {
		const categories = await db.category.findMany();
		return NextResponse.json(categories);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to fetch categories",
			},
			{ status: 500 }
		);
	}
}

export async function PUT(req) {
	try {
		const { id, title, description } = await req.json();

		const updatedCategory = await db.category.update({
			where: { id },
			data: { title, description },
		});

		return NextResponse.json(updatedCategory);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to update the category",
			},
			{ status: 500 }
		);
	}
}

export async function DELETE(req) {
	try {
		const { id } = await req.json();

		await db.category.delete({
			where: { id },
		});

		return NextResponse.json({ message: "Category deleted successfully" });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to delete the category",
			},
			{ status: 500 }
		);
	}
}
