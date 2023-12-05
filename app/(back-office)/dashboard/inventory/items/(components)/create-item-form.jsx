"use client";

import { useState } from "react";
import { notify } from "@/lib/toaster";
import handleRequest from "@/lib/api";
import TextInput from "@/components/form/text-input";
import Select from "@/components/form/select";
import TextArea from "@/components/form/text-area";
import SubmitButton from "@/components/form/submit-button";
import ImageUpload from "@/components/form/image-upload";
import { ItemsSchema } from "@/validations/items-schema";
import useSubmit from "@/lib/hooks/useSubmit";

const CreateItemForm = ({
	categoryOptions,
	unitOptions,
	brandOptions,
	supplierOptions,
	warehouseOptions,
}) => {
	const [imageUrl, setImageUrl] = useState("");

	const { register, handleSubmit, errors, isSubmitting } = useSubmit(
		ItemsSchema,
		async (data) => {
			try {
				data.imageUrl = imageUrl;
				await handleRequest("/api/items", "POST", data);
				notify("success", "New items created!");
			} catch (error) {
				// Handle or log the error
				console.log(error);
			}
		}
	);

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className='w-full max-w-4xl p-8 bg-form rounded-lg shadow-sm mx-auto mt-8'
			>
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
					<TextInput
						label='Item Name'
						name='title'
						register={register}
						errors={errors}
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
