import { z } from "zod";

export const transferSchema = z.object({
	transferStock: z.coerce
		.number({ required_error: "Stock is required" })
		.min(2),
	referenceNumber: z.string().min(5),
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
	givingWarehouseId: z
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
