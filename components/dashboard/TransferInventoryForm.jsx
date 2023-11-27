"use client";
import { z } from "zod";
import TextInput from "@/components/FormInputs/TextInput";
import TextArea from "@/components/FormInputs/TextArea";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import Select from "@/components/FormInputs/Select";
import useSubmit from "@/lib/hooks/useSubmit";
import handleRequest from "@/lib/api";
import { notify } from "@/lib/toaster";

const transferSchema = z.object({
	transferStock: z.coerce
		.number({ required_error: "Stock is required" })
		.min(2),
	referenceNumber: z.string().min(5),
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
	givingWarehouseId: z
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

const TransferInventoryForm = () => {
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
					// defaultValue={657557}
					// isRequired={true}
				/>
				<Select
					label='Select the Item'
					name='itemId'
					register={register}
					errors={errors}
					options={warehouseTypeOptions}
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
					options={warehouseTypeOptions}
					className='w-full'
				/>
				<Select
					label='Select the warehouse to receive the stock'
					name='receivingWarehouseId'
					register={register}
					errors={errors}
					options={warehouseTypeOptions}
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
