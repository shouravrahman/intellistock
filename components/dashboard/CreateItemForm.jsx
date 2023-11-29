"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "@/components/FormInputs/TextInput";

import TextArea from "@/components/FormInputs/TextArea";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import Select from "@/components/FormInputs/Select";
import ImageUpload from "@/components/FormInputs/ImageUpload";
import { notify } from "@/lib/toaster";
import handleRequest from "@/lib/api";

const ItemsSchema = z.object({
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

const CreateItemForm = ({
	categoryOptions,
	unitOptions,
	brandOptions,
	supplierOptions,
	warehouseOptions,
}) => {
	const [imageUrl, setImageUrl] = useState("");
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(ItemsSchema),
	});

	const onSubmit = async (data) => {
		data.imageUrl = imageUrl;
		try {
			const response = await handleRequest("/api/items", "POST", data);
			if (response.ok) {
				reset();
				notify("success", "New Item created!");
				setImageUrl(""); // Reset imageUrl
			} else {
				// Handle API response errors
				const errorData = await response.json();
				console.error("API error:", errorData);
				notify("error", "Failed to create item. Please try again.");
				setImageUrl("");
			}
		} catch (error) {
			// Handle other errors
			console.error("Unexpected error:", error);
			notify("error", "An unexpected error occurred. Please try again.");
		}
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-lg shadow mx-auto mt-8'
			>
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
					<TextInput
						label='Item Name'
						name='title'
						register={register}
						errors={errors}
						isRequired={true}
					/>
					<Select
						label='Select the item category'
						name='category'
						register={register}
						errors={errors}
						options={categoryOptions}
					/>

					<TextInput
						label='Item SKU'
						name='sku'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<TextInput
						label='Item Barcode'
						name='barcode'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<TextInput
						label='Item Quantity'
						name='quantity'
						register={register}
						errors={errors}
						type='number'
						isNumber
						className='w-full'
					/>

					<Select
						label='Select the item unit'
						name='unit'
						register={register}
						errors={errors}
						options={unitOptions}
					/>
					<Select
						label='Select the item brand'
						name='brand'
						register={register}
						errors={errors}
						options={brandOptions}
					/>

					<TextInput
						label='Buying Price'
						name='buyingPrice'
						register={register}
						errors={errors}
						type='number'
						isNumber
						className='w-full'
					/>
					<TextInput
						label='Selling Price'
						name='sellingPrice'
						register={register}
						errors={errors}
						type='number'
						isNumber
						className='w-full'
					/>
					<Select
						label='Supplier'
						name='suppliers'
						register={register}
						errors={errors}
						className='w-full'
						options={supplierOptions}
					/>
					<TextInput
						label='Re-Order Point'
						name='reorderPoint'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<Select
						label='Warehouse'
						name='warehouse'
						register={register}
						errors={errors}
						className='w-full'
						options={warehouseOptions}
					/>

					<TextInput
						label='Item Weight in Kgs'
						name='weight'
						register={register}
						errors={errors}
						type='number'
						isNumber
						className='w-full'
					/>
					<TextInput
						label='Item Dimensions in cm (20 × 30 × 100)'
						name='dimensions'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<TextInput
						label='Item Tax in %'
						name='taxRate'
						register={register}
						errors={errors}
						type='number'
						isNumber
						className='w-full'
					/>
					<TextArea
						label='Item Description'
						name='description'
						register={register}
						errors={errors}
					/>
					<TextArea
						label='Item Notes'
						name='notes'
						register={register}
						errors={errors}
					/>

					<ImageUpload
						label='Item Image'
						imageUrl={imageUrl}
						setImageUrl={setImageUrl}
					/>

					<div className='py-4'>
						<SubmitButton title='Item' isSubmitting={isSubmitting} />
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateItemForm;
