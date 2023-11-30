import { z } from "zod";

export const UnitsSchema = z.object({
	title: z
		.string()
		.min(3, { message: "Unit Name should be at least 3 characters long" })
		.max(50, { message: "Unit Name should not exceed 50 characters" }),
	abbreviation: z
		.string()
		.min(2, { message: "Abbreviation should be at least 2 characters long" })
		.max(10, { message: "Abbreviation should not exceed 10 characters" }),
	defaultUnit: z.boolean(),
});
