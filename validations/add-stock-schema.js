import { z } from "zod";

export const addStockSchema = z.object({
	addedStockQuantity: z.coerce.number().min(2),
	referenceNumber: z.string().min(5),
	notes: z.string().max(255),
	receivingWarehouseId: z.string(),
	itemId: z.string(),
});
