import { z } from "zod";

export const WarehouseSchema = z.object({
	title: z
		.string()
		.min(3)
		.max(50)
		.refine((data) => data.trim() !== "", {
			message: "Warehouse Name is required and should not be empty",
		}),
	location: z
		.string()
		.min(3)
		.max(100)
		.refine((data) => data.trim() !== "", {
			message: "Location is required and should not be empty",
		}),
	description: z.string().max(255),
	warehouseType: z
		.string()
		.refine((data) => ["main", "branch"].includes(data), {
			message: "Invalid Warehouse Type. Should be either 'main' or 'branch'",
		}),
});
