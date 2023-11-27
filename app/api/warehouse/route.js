import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
	try {
		const warehouses = await db.warehouse.findMany({
			orderBy: { createdAt: "desc" }, //latest warehouse
		});
		return NextResponse.json(warehouses);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to fetch warehouses",
			},
			{ status: 500 }
		);
	}
}
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
export async function PUT(req) {
	try {
		const { id, title, location, description, warehouseType } =
			await req.json();

		const updatedWarehouse = await db.warehouse.update({
			where: { id },
			data: { title, location, description, warehouseType },
		});

		return NextResponse.json(updatedWarehouse);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to update the warehouse",
			},
			{ status: 500 }
		);
	}
}
export async function DELETE(req) {
	try {
		const { id } = await req.json();

		await db.warehouse.delete({
			where: { id },
		});

		return NextResponse.json({ message: "Warehouse deleted successfully" });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to delete the warehouse",
			},
			{ status: 500 }
		);
	}
}
