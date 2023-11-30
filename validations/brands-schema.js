import { z } from "zod";

export const BrandSchema = z.object({
	title: z
		.string()
		.min(3, "Brand title must be at least 3 characters long")
		.max(50, "Brand title cannot exceed 50 characters")
		.refine((data) => data.trim() !== "", {
			message: "Brand title is required and cannot be empty",
		}),
});
