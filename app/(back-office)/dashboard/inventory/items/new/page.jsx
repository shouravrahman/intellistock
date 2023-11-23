"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "@/components/FormInputs/TextInput";

import TextArea from "@/components/FormInputs/TextArea";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import FormHeader from "@/components/dashboard/FormHeader";
import { toast } from "react-toastify";
import Select from "@/components/FormInputs/Select";
import { UploadButton, UploadDropzone } from "@/lib/uploadthings";
import { Pencil } from "lucide-react";
import Image from "next/image";
import ImageUpload from "@/components/FormInputs/ImageUpload";

const ItemsSchema = z.object({
	itemName: z.string().min(3).max(50),
	description: z.string().max(255),
	category: z.string().min(3).max(50),
	sku: z.string().min(1).max(20),
	barcode: z.string().min(1).max(20),
	quantity: z.coerce.number().min(0),
	unit: z.string().min(2).max(20),
	brand: z.string().min(2).max(50),
	unitPrice: z.coerce.number().min(0),
	costPrice: z.coerce.number().min(0),
	supplier: z.string().min(3).max(50),
	reorderPoint: z.string().min(0),
	warehouse: z.string().min(3).max(50),
	// imageUrl: z.string().min(3),
	weight: z.coerce.number().min(0),
	dimensions: z.string().max(50),
	taxRate: z.coerce.number().min(0),
	notes: z.string().max(255),
});

const ItemsForm = () => {
	const [imageUrl, setImageUrl] = useState("");
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isLoading },
	} = useForm({
		resolver: zodResolver(ItemsSchema),
	});
	const categoryOptions = [
		{ value: "electronics", label: "Electronics" },
		{ value: "clothing", label: "Clothing" },
		{ value: "groceries", label: "Groceries" },
		// value will be a db id later
	];
	const unitOptions = [
		{ value: "kg", label: "KG" },
		{ value: "pieces", label: "Pieces" },
	];
	const brandOptions = [
		{ value: "dell", label: "Dell" },
		{ value: "hp", label: "HP" },
	];

	const onSubmit = async (data) => {
		console.log(data);
		data.imageUrl = imageUrl;
		const baseUrl = "http://localhost:3000";
		try {
			const response = await fetch(`${baseUrl}/api/items`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (response.ok) {
				reset();
				notify();
				setImageUrl("");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const notify = () => toast("New Item created!");

	return (
		<div>
			<FormHeader title='New Item' href='/dashboard/inventory' />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-lg shadow mx-auto mt-8'
			>
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
					<TextInput
						label='Item Name'
						name='itemName'
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
						name='unitPrice'
						register={register}
						errors={errors}
						type='number'
						isNumber
						className='w-full'
					/>
					<TextInput
						label='Selling Price'
						name='costPrice'
						register={register}
						errors={errors}
						type='number'
						isNumber
						className='w-full'
					/>
					<TextInput
						label='Supplier'
						name='supplier'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<TextInput
						label='Re-Order Point'
						name='reorderPoint'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<TextInput
						label='Warehouse'
						name='warehouse'
						register={register}
						errors={errors}
						className='w-full'
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
						<SubmitButton title='Item' isLoading={isLoading} />
					</div>
				</div>
			</form>
		</div>
	);
};

export default ItemsForm;
