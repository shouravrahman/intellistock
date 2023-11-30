"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { notify } from "@/lib/toaster";
import handleRequest from "@/lib/api";
import TextInput from "@/components/form/text-input";
import Select from "@/components/form/select";
import TextArea from "@/components/form/text-area";
import SubmitButton from "@/components/form/submit-button";
import ImageUpload from "@/components/form/image-upload";
import { ItemsSchema } from "@/validations/items-schema";

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
