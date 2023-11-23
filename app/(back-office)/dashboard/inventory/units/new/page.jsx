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

const UnitsSchema = z.object({
	unitName: z.string().min(3).max(50),
	abbreviation: z.string().min(1).max(10),
	defaultUnit: z.boolean(),
});
const notify = () => toast("New unit created!");
const UnitsForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isLoading },
	} = useForm({
		resolver: zodResolver(UnitsSchema),
	});

	const onSubmit = async (data) => {
		const baseUrl = "http://localhost:3000";
		try {
			const response = await fetch(`${baseUrl}/api/units`, {
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

	return (
		<div>
			<FormHeader title='New Unit' href='/dashboard/inventory' />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-lg shadow mx-auto mt-8'
			>
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
					<TextInput
						label='Unit Name'
						name='unitName'
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
						<SubmitButton title='Unit' isLoading={isLoading} />
					</div>
				</div>
			</form>
		</div>
	);
};

export default UnitsForm;
