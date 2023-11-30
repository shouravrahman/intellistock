"use client";
import { z } from "zod";

import useSubmit from "@/lib/hooks/useSubmit";
import handleRequest from "@/lib/api";
import { notify } from "@/lib/toaster";
import FormHeader from "@/components/dashboard/form-header";
import TextInput from "@/components/form/text-input";
import TextArea from "@/components/form/text-area";
import Select from "@/components/form/select";
import SubmitButton from "@/components/form/submit-button";
import { WarehouseSchema } from "@/validations/warehouse-schema";

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
