import { z } from "zod";

export const transferSchema = z.object({
	transferStock: z.coerce
		.number({ required_error: "Stock is required" })
		.min(2),
	referenceNumber: z.string().min(5),
	itemId: z.string(),
	notes: z.string().max(255),
	receivingWarehouseId: z.string(),
	givingWarehouseId: z.string(),
});
