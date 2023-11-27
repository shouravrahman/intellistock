import db from "@/lib/db";
import { NextResponse } from "next/server";

// import SupplierSchema from '@/schemas/SupplierSchema'; // Import the SupplierSchema
//   const data = await SupplierSchema.parseAsync(req.body); // Validate the request body against the schema

export async function POST(req) {
	try {
		const {
			name,
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
				name,
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
