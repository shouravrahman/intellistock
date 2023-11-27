"use client";
import { z } from "zod";
import TextInput from "@/components/FormInputs/TextInput";
import TextArea from "@/components/FormInputs/TextArea";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import Select from "@/components/FormInputs/Select";
import useSubmit from "@/lib/hooks/useSubmit";
import handleRequest from "@/lib/api";
import { notify } from "@/lib/toaster";

const addStockSchema = z.object({
	addedStockQuantity: z.coerce.number().min(2),
	referenceNumber: z.string().min(5),
	notes: z.string().max(255),
	receivingWarehouseId: z
		.string()
		.refine(
			(data) =>
				[
					"65623a092ee79219ea3a4f61",
					"65623a092ee79219ea3a4f63",
					"65623a092ee79219ea3a4f62",
					"65623a092ee79219ea3a4f64",
				].includes(data),
			{
				message: "Invalid Warehouse Type",
			}
		),
	itemId: z
		.string()
		.refine(
			(data) =>
				[
					"65623a092ee79219ea3a4f61",
					"65623a092ee79219ea3a4f63",
					"65623a092ee79219ea3a4f62",
					"65623a092ee79219ea3a4f64",
				].includes(data),
			{
				message: "Invalid Warehouse Type",
			}
		),
});

const AddInventoryStockForm = () => {
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

export default AddInventoryStockForm;
