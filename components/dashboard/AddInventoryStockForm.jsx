"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "@/components/FormInputs/TextInput";
import TextArea from "@/components/FormInputs/TextArea";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { toast } from "react-toastify";
import Select from "@/components/FormInputs/Select";

const addStockSchema = z.object({
	addStock: z.coerce.number().min(2),
	notes: z.string().max(255),
	receivingWarehouseId: z
		.string()
		.refine((data) => ["branchA", "branchB"].includes(data), {
			message: "Invalid Warehouse Type",
		}),
});

const AddInventoryStockForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isLoading },
	} = useForm({
		resolver: zodResolver(addStockSchema),
	});

	const onSubmit = async (data) => {
		console.log(data);
		const baseUrl = "http://localhost:3000";
		try {
			const response = await fetch(`${baseUrl}/api/adjustments/add`, {
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
	const notify = () => toast("Adjustment Successful!");
	const warehouseTypeOptions = [
		{ value: "branchA", label: "Branch A" },
		{ value: "branchB", label: "Branch B" },
	];
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-lg shadow mx-auto mt-8'
		>
			<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
				<TextInput
					label='Enter quantity of stock to add'
					name='addStock'
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
					<SubmitButton title='Stock' isLoading={isLoading} />
				</div>
			</div>
		</form>
	);
};

export default AddInventoryStockForm;
