"use client";
import { z } from "zod";
import TextInput from "@/components/FormInputs/TextInput";
import TextArea from "@/components/FormInputs/TextArea";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import FormHeader from "@/components/dashboard/FormHeader";
import Select from "@/components/FormInputs/Select";
import useSubmit from "@/lib/hooks/useSubmit";
import handleRequest from "@/lib/api";
import { notify } from "@/lib/toaster";

const WarehouseSchema = z.object({
	title: z
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
	const { register, handleSubmit, errors, isSubmitting } = useSubmit(
		WarehouseSchema,
		async (data) => {
			try {
				await handleRequest("/api/warehouse", "POST", data);
				notify("success", "  New warehouse created!");
			} catch (error) {
				// Handle or log the error
				console.log(error);
			}
		}
	);

	const warehouseTypeOptions = [
		{ value: "main", label: "Main Warehouse" },
		{ value: "branch", label: "Branch Warehouse" },
	];
	return (
		<div>
			<FormHeader title='New Warehouse' href='/dashboard/inventory' />
			<form
				onSubmit={handleSubmit}
				className='w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-lg shadow mx-auto mt-8'
			>
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
					<TextInput
						label='Warehouse Name'
						name='title'
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
						<SubmitButton title='Warehouse' isSubmitting={isSubmitting} />
					</div>
				</div>
			</form>
		</div>
	);
};

export default WarehouseForm;
