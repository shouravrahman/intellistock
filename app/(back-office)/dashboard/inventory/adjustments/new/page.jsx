"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "@/components/FormInputs/TextInput";
import TextArea from "@/components/FormInputs/TextArea";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import FormHeader from "@/components/dashboard/FormHeader";
import { toast } from "react-toastify";
import Select from "@/components/FormInputs/Select";

const adjustmentsSchema = z.object({
	transferStock: z.coerce.number().min(2),
	notes: z.string().max(255),
	receivingBranchId: z
		.string()
		.refine((data) => ["branchA", "branchB"].includes(data), {
			message: "Invalid Warehouse Type",
		}),
});

const NewAdjustments = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isLoading },
	} = useForm({
		resolver: zodResolver(adjustmentsSchema),
	});

	const onSubmit = async (data) => {
		console.log(data);
		const baseUrl = "http://localhost:3000";
		try {
			const response = await fetch(`${baseUrl}/api/adjustments`, {
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
	];
	return (
		<div>
			<FormHeader title='New Warehouse' href='/dashboard/inventory' />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-lg shadow mx-auto mt-8'
			>
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
					<TextInput
						label='Enter amount of stock to transfer'
						name='transferStock'
						register={register}
						errors={errors}
						type='number'
						className='w-full'
					/>

					<Select
						label='Select the Branch to receive the stock'
						name='receivingBranchId'
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
					<div className='py-5'>
						<SubmitButton title='Adjustments' isLoading={isLoading} />
					</div>
				</div>
			</form>
		</div>
	);
};

export default NewAdjustments;
