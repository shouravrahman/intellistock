"use client";
// UnitsForm.js
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "@/components/FormInputs/TextInput";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { toast } from "react-toastify";
import useSubmit from "@/lib/hooks/useSubmit";
import handleRequest from "@/lib/api";
import { notify } from "@/lib/toaster";

const UnitsSchema = z.object({
	title: z.string().min(3).max(50),
	abbreviation: z.string().min(2).max(10),
	defaultUnit: z.boolean(),
});
const UnitsForm = () => {
	const { register, handleSubmit, errors, isSubmitting } = useSubmit(
		UnitsSchema,
		async (data) => {
			try {
				await handleRequest("/api/unit", "POST", data);
				notify("success", "🦄 New unit created!");
			} catch (error) {
				// Handle or log the error
				console.log(error);
			}
		}
	);
	return (
		<div>
			<FormHeader title='New Unit' href='/dashboard/inventory' />
			<form
				onSubmit={handleSubmit}
				className='w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-lg shadow mx-auto mt-8'
			>
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
					<TextInput
						label='Unit Name'
						name='title'
						register={register}
						errors={errors}
						className='w-full '
					/>
					<TextInput
						label='Abbreviation'
						name='abbreviation'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<div className='mt-6'>
						<label className='block mb-2 text-base font-medium text-gray-900'>
							Default Unit
						</label>
						<input
							type='checkbox'
							{...register("defaultUnit")}
							className='mr-2'
						/>
						<span className='text-gray-700'>Set as default unit</span>
					</div>
					<div className='py-4'>
						<SubmitButton title='Unit' isSubmitting={isSubmitting} />
					</div>
				</div>
			</form>
		</div>
	);
};

export default UnitsForm;
