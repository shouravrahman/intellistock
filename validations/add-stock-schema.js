import { z } from "zod";

export const addStockSchema = z.object({
	addedStockQuantity: z.coerce.number().min(2),
	referenceNumber: z.string().min(5),
	notes: z.string().max(255),
	receivingWarehouseId: z
		.string()
		.refine(
			(data) =>
				[
					"65623a092ee79219ea3a4f61",
					"65623a092ee79219ea3a4f63",
					"65623a092ee79219ea3a4f62",
					"65623a092ee79219ea3a4f64",
				].includes(data),
			{
				message: "Invalid Warehouse Type",
			}
		),
	itemId: z
		.string()
		.refine(
			(data) =>
				[
					"65623a092ee79219ea3a4f61",
					"65623a092ee79219ea3a4f63",
					"65623a092ee79219ea3a4f62",
					"65623a092ee79219ea3a4f64",
				].includes(data),
			{
				message: "Invalid Warehouse Type",
			}
		),
});
