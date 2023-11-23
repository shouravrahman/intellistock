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

const WarehouseSchema = z.object({
	warehouseName: z
		.string()
		.min(3)
		.max(50)
		.refine((data) => data.trim() !== "", {
			message: "Warehouse Name is required",
		}),
	location: z
		.string()
		.min(3)
		.max(100)
		.refine((data) => data.trim() !== "", {
			message: "Location is required",
		}),
	description: z.string().max(255),
	warehouseType: z
		.string()
		.refine((data) => ["main", "branch"].includes(data), {
			message: "Invalid Warehouse Type",
		}),
});

const WarehouseForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isLoading },
	} = useForm({
		resolver: zodResolver(WarehouseSchema),
	});

	const onSubmit = async (data) => {
		console.log(data);
		const baseUrl = "http://localhost:3000";
		try {
			const response = await fetch(`${baseUrl}/api/warehouse`, {
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
	const notify = () => toast("New Warehouse created!");
	const warehouseTypeOptions = [
		{ value: "main", label: "Main Warehouse" },
		{ value: "branch", label: "Branch Warehouse" },
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
						label='Warehouse Name'
						name='warehouseName'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<TextInput
						label='Location'
						name='location'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<TextArea
						label='Description'
						name='description'
						register={register}
						errors={errors}
					/>
					<Select
						label='Warehouse Type'
						name='warehouseType'
						register={register}
						errors={errors}
						options={warehouseTypeOptions}
					/>
					<div className='py-5'>
						<SubmitButton title='Warehouse' isLoading={isLoading} />
					</div>
				</div>
			</form>
		</div>
	);
};

export default WarehouseForm;
