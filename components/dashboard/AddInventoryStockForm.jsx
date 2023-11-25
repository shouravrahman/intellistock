"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "@/components/FormInputs/TextInput";
import TextArea from "@/components/FormInputs/TextArea";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { toast } from "react-toastify";
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
		.refine((data) => ["branchA", "branchB"].includes(data), {
			message: "Invalid Warehouse Type",
		}),
});

const AddInventoryStockForm = () => {
	const { register, handleSubmit, errors, isSubmitting } = useSubmit(
		addStockSchema,
		async (data) => {
			try {
				await handleRequest("/api/adjustments/add", "POST", data);
				notify("success", "🦄 New Stock added!");
			} catch (error) {
				// Handle or log the error
				console.log(error);
			}
		}
	);
	const warehouseTypeOptions = [
		{ value: "branchA", label: "Branch A" },
		{ value: "branchB", label: "Branch B" },
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
