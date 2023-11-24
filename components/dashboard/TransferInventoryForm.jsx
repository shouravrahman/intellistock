"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "@/components/FormInputs/TextInput";
import TextArea from "@/components/FormInputs/TextArea";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { toast } from "react-toastify";
import Select from "@/components/FormInputs/Select";

const transferSchema = z.object({
	transferStock: z.coerce.number().min(2),
	notes: z.string().max(255),
	receivingWarehouseId: z
		.string()
		.refine((data) => ["branchA", "branchB"].includes(data), {
			message: "Invalid Warehouse Type",
		}),
	givingWarehouseId: z
		.string()
		.refine((data) => ["branchA", "branchB"].includes(data), {
			message: "Invalid Warehouse Type",
		}),
});

const TransferInventoryForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isLoading },
	} = useForm({
		resolver: zodResolver(transferSchema),
	});

	const onSubmit = async (data) => {
		console.log(data);
		const baseUrl = "http://localhost:3000";
		try {
			const response = await fetch(`${baseUrl}/api/adjustments/transfer`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (response.ok) {
				reset();
				notify();
			}
		} catch (error) {
			console.log(error);
		}
	};
	const notify = () => toast("Adjustment Successfull!");
	const warehouseTypeOptions = [
		{ value: "branchA", label: "Branch A" },
		{ value: "branchB", label: "Branch B" },
		{ value: "branchC", label: "Branch C" },
		{ value: "branchD", label: "Branch D" },
	];
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-lg shadow mx-auto mt-8'
		>
			<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
				<TextInput
					label='Enter quantity of stock to transfer'
					name='transferStock'
					register={register}
					errors={errors}
					type='number'
				/>
				<Select
					label='Select the warehouse that will give the stock'
					name='givingWarehouseId'
					register={register}
					errors={errors}
					options={warehouseTypeOptions}
				/>
				<Select
					label='Select the warehouse to receive the stock'
					name='receivingWarehouseId'
					register={register}
					errors={errors}
					options={warehouseTypeOptions}
				/>
				<TextArea
					label='Adjustment Notes'
					name='notes'
					register={register}
					errors={errors}
				/>
				<div className='py-3'>
					<SubmitButton title='Adjustments' isLoading={isLoading} />
				</div>
			</div>
		</form>
	);
};

export default TransferInventoryForm;
