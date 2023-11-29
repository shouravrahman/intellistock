import db from "@/lib/db";
import { NextResponse } from "next/server";

// import SupplierSchema from '@/schemas/SupplierSchema'; // Import the SupplierSchema
//   const data = await SupplierSchema.parseAsync(req.body); // Validate the request body against the schema

export async function POST(req) {
	try {
		const {
			title,
			phone,
			email,
			address,
			contactPerson,
			supplierCode,
			paymentTerms,
			taxID,
			notes,
		} = await req.json();

		const suppliers = await db.supplier.create({
			data: {
				title,
				phone,
				email,
				address,
				contactPerson,
				supplierCode,
				paymentTerms,
				taxID,
				notes,
			},
		});

		return NextResponse.json(suppliers);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to create a  suppliers",
			},
			{ status: 500 }
		);
	}
}
// GET /api/supplier
export async function GET() {
	try {
		const suppliers = await db.supplier.findMany();
		return NextResponse.json(suppliers);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to fetch suppliers",
			},
			{ status: 500 }
		);
	}
}

// GET /api/supplier/[id]
export async function GET_id(req) {
	const { id } = req.params;

	try {
		const supplier = await db.supplier.findUnique({
			where: {
				id: parseInt(id),
			},
		});

		if (!supplier) {
			return NextResponse.json(
				{
					message: "Supplier not found",
				},
				{ status: 404 }
			);
		}

		return NextResponse.json(supplier);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to fetch supplier",
			},
			{ status: 500 }
		);
	}
}

// PUT /api/supplier/[id]
export async function PUT_id(req) {
	const { id } = req.params;

	try {
		const {
			title,
			phone,
			email,
			address,
			contactPerson,
			supplierCode,
			paymentTerms,
			taxID,
			notes,
		} = await req.json();

		const updatedSupplier = await db.supplier.update({
			where: {
				id: parseInt(id),
			},
			data: {
				title,
				phone,
				email,
				address,
				contactPerson,
				supplierCode,
				paymentTerms,
				taxID,
				notes,
			},
		});

		return NextResponse.json(updatedSupplier);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to update supplier",
			},
			{ status: 500 }
		);
	}
}

// DELETE /api/supplier/[id]
export async function DELETE_id(req) {
	const { id } = req.params;

	try {
		const deletedSupplier = await db.supplier.delete({
			where: {
				id: parseInt(id),
			},
		});

		return NextResponse.json(deletedSupplier);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error,
				message: "Failed to delete supplier",
			},
			{ status: 500 }
		);
	}
}
