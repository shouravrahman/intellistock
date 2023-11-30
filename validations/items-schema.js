import { z } from "zod";

export const ItemsSchema = z.object({
	title: z
		.string()
		.min(3, { message: "Item name must be at least 3 characters long" })
		.max(50, { message: "Item name can't exceed 50 characters" })
		.refine((data) => data.trim() !== "", { message: "Item name is required" }),
	description: z
		.string()
		.max(255, { message: "Description can't exceed 255 characters" }),
	category: z
		.string()
		.min(3, { message: "Category must be at least 3 characters long" })
		.max(50, { message: "Category can't exceed 50 characters" })
		.refine((data) => data.trim() !== "", { message: "Category is required" }),
	sku: z
		.string()
		.min(1, { message: "SKU must be at least 1 character long" })
		.max(20, { message: "SKU can't exceed 20 characters" })
		.refine((data) => data.trim() !== "", { message: "SKU is required" }),
	barcode: z
		.string()
		.min(1, { message: "Barcode must be at least 1 character long" })
		.max(20, { message: "Barcode can't exceed 20 characters" })
		.refine((data) => data.trim() !== "", { message: "Barcode is required" }),
	quantity: z.coerce
		.number()
		.int()
		.min(0, { message: "Quantity must be a non-negative integer" }),
	unit: z
		.string()
		.min(2, { message: "Unit must be at least 2 characters long" })
		.max(30, { message: "Unit can't exceed 30 characters" })
		.refine((data) => data.trim() !== "", { message: "Unit is required" }),
	brand: z
		.string()
		.min(2, { message: "Brand must be at least 2 characters long" })
		.max(50, { message: "Brand can't exceed 50 characters" })
		.refine((data) => data.trim() !== "", { message: "Brand is required" }),
	buyingPrice: z.coerce
		.number()
		.min(0, { message: "Buying price must be a non-negative number" }),
	sellingPrice: z.coerce
		.number()
		.min(0, { message: "Selling price must be a non-negative number" }),
	suppliers: z
		.string()
		.min(3, { message: "Suppliers must be at least 3 characters long" })
		.max(50, { message: "Suppliers can't exceed 50 characters" })
		.refine((data) => data.trim() !== "", { message: "Suppliers is required" }),
	reorderPoint: z
		.string()
		.min(0, { message: "Reorder point must be a non-negative number" }),
	warehouse: z
		.string()
		.min(3, { message: "Warehouse must be at least 3 characters long" })
		.max(50, { message: "Warehouse can't exceed 50 characters" })
		.refine((data) => data.trim() !== "", { message: "Warehouse is required" }),
	// imageUrl: z
	// 	.string()
	// 	.min(3, { message: "Image URL must be at least 3 characters long" })
	// 	.refine((data) => data.trim() !== "", { message: "Image URL is required" }),
	weight: z.coerce
		.number()
		.min(0, { message: "Weight must be a non-negative number" }),
	dimensions: z
		.string()
		.max(50, { message: "Dimensions can't exceed 50 characters" }),
	taxRate: z.coerce
		.number()
		.min(0, { message: "Tax rate must be a non-negative number" }),
	notes: z.string().max(255, { message: "Notes can't exceed 255 characters" }),
});
