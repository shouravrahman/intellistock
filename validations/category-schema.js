import { z } from "zod";

export const CategorySchema = z.object({
	title: z
		.string()
		.min(3)
		.max(50, { message: "Title cannot exceed 50 characters" }),
	description: z.string().min(30).max(450, {
		message: "Description should be between 30 and 450 characters",
	}),
});
