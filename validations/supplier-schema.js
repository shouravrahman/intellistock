import { z } from "zod";

const phoneRegex = new RegExp(
	/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
export const SupplierSchema = z.object({
	title: z
		.string()
		.min(3)
		.max(50)
		.refine((data) => data.trim() !== "", {
			message: "Supplier's Name is required",
		}),
	phone: z.string().regex(phoneRegex, "Invalid Number!"),
	email: z.string().email({ message: "Invalid email format" }).max(255),
	address: z.string().max(255),
	contactPerson: z.string().max(50),
	supplierCode: z.string().min(3).max(20),
	paymentTerms: z.string().max(50),
	taxID: z.string().max(50),
	notes: z.string().max(255),
});
