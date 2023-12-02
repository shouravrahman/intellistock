"use client";

import useSubmit from "@/lib/hooks/useSubmit";
import handleRequest from "@/lib/api";
import { notify } from "@/lib/toaster";
import TextInput from "@/components/form/text-input";
import Select from "@/components/form/select";
import TextArea from "@/components/form/text-area";
import SubmitButton from "@/components/form/submit-button";
import { addStockSchema } from "@/validations/add-stock-schema";

const AddStockForm = () => {
	const { register, handleSubmit, errors, isSubmitting } = useSubmit(
		addStockSchema,
		async (data) => {
			try {
				await handleRequest("/api/adjustments/add", "POST", data);
				notify("success", "  New Stock added!");
			} catch (error) {
				// Handle or log the error
				console.log(error);
			}
		}
	);
	const warehouseTypeOptions = [
		{ value: "65623a092ee79219ea3a4f61", label: "Branch A" },
		{ value: "65623a092ee79219ea3a4f63", label: "Branch B" },
		{ value: "65623a092ee79219ea3a4f62", label: "Branch C" },
		{ value: "65623a092ee79219ea3a4f64", label: "Branch D" },
	];
	return (
		<form
			onSubmit={handleSubmit}
			className='w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-lg shadow mx-auto mt-8'
		>
			<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
				<TextInput
					label='Reference Number'
					name='referenceNumber'
					register={register}
					errors={errors}
					type='number'
					className='w-full'
				/>
				<Select
					label='Select the Item'
					name='itemId'
					register={register}
					errors={errors}
					options={warehouseTypeOptions}
				/>

				<TextInput
					label='Enter quantity of stock to add'
					name='addedStockQuantity'
					register={register}
					errors={errors}
					type='number'
					className='w-full'
				/>

				<Select
					label='Select the Warehouse to receive the stock'
					name='receivingWarehouseId'
					register={register}
					errors={errors}
					options={warehouseTypeOptions}
				/>
				<TextArea
					label='Notes'
					name='notes'
					register={register}
					errors={errors}
				/>
				<div className='py-3'>
					<SubmitButton title='Stock' isSubmitting={isSubmitting} />
				</div>
			</div>
		</form>
	);
};

export default AddStockForm;