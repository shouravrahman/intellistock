"use client";

import useSubmit from "@/lib/hooks/useSubmit";
import handleRequest from "@/lib/api";
import { notify } from "@/lib/toaster";
import TextInput from "@/components/form/text-input";
import Select from "@/components/form/select";
import TextArea from "@/components/form/text-area";
import SubmitButton from "@/components/form/submit-button";
import { transferSchema } from "@/validations/transfer-stock-schema";

const TransferInventoryForm = ({ items, warehouse }) => {
	const { register, handleSubmit, errors, isSubmitting } = useSubmit(
		transferSchema,
		async (data) => {
			try {
				await handleRequest("/api/adjustments/transfer", "POST", data);
				notify("success", "  New Transfer initiated!");
			} catch (error) {
				// Handle or log the error
				console.log(error);
			}
		}
	);

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
				/>
				<Select
					label='Select the Item'
					name='itemId'
					register={register}
					errors={errors}
					options={items}
					className='w-full'
				/>
				<TextInput
					label='Enter quantity of stock to transfer'
					name='transferStock'
					register={register}
					errors={errors}
					type='number'
					className='w-full'
				/>
				<Select
					label='Select the warehouse that will give the stock'
					name='givingWarehouseId'
					register={register}
					errors={errors}
					options={warehouse}
					className='w-full'
				/>
				<Select
					label='Select the warehouse to receive the stock'
					name='receivingWarehouseId'
					register={register}
					errors={errors}
					options={warehouse}
					className='w-full'
				/>
				<TextArea
					label='Adjustment Notes'
					name='notes'
					register={register}
					errors={errors}
				/>
				<div className='py-3'>
					<SubmitButton title='Adjustments' isSubmitting={isSubmitting} />
				</div>
			</div>
		</form>
	);
};

export default TransferInventoryForm;
