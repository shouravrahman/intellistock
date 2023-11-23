"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "@/components/FormInputs/TextInput";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { toast } from "react-toastify";

const BrandsSchema = z.object({
	brandName: z.string().min(3).max(50),
});

const notify = () => toast("New brand created!");

const BrandsForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isLoading },
	} = useForm({
		resolver: zodResolver(BrandsSchema),
	});

	const onSubmit = async (data) => {
		const baseUrl = "http://localhost:3000";
		try {
			const response = await fetch(`${baseUrl}/api/brands`, {
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
			<FormHeader title='New Brand' href='/dashboard/inventory' />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-lg shadow mx-auto mt-8'
			>
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
					<TextInput
						label='Brand Name'
						name='brandName'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<div className='py-4'>
						<SubmitButton title='Brand' isLoading={isLoading} />
					</div>
				</div>
			</form>
		</div>
	);
};

export default BrandsForm;
