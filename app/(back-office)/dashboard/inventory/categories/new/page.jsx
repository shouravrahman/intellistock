"use client";

import FormHeader from "@/components/dashboard/FormHeader";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "@/components/FormInputs/TextInput";
import { Loader2, Plus } from "lucide-react";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextArea from "@/components/FormInputs/TextArea";
import { toast } from "react-toastify";

const CategorySchema = z.object({
	title: z
		.string()
		.min(3, { message: "title must be minimum 3 charecters long" })
		.max(50, { message: "title can not be more than 50 charecters" }),

	category_desc: z
		.string()
		.min(30, {
			message: "Category description must be minimum 30 charecters long",
		})
		.max(450, {
			message: "Category description can not be more than 450 charecters",
		}),
});

const NewCategory = () => {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors, isLoading },
	} = useForm({
		resolver: zodResolver(CategorySchema),
	});
	const notify = () => toast("New Category created!");
	const onSubmit = async (data) => {
		const baseUrl = "http://localhost:3000";
		try {
			const response = await fetch(`${baseUrl}/api/categories`, {
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
		<div className='font-rubik font-medium text-base'>
			{/* header */}
			<FormHeader title='New Category' href='/dashboard/inventory/' />

			{/* form */}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto mt-8'
			>
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
					<TextInput
						label='Category Title'
						name='title'
						register={register}
						errors={errors}
						className='sm:col-span-2'
					/>

					<TextArea
						register={register}
						name='category_desc'
						label='Category Description'
						errors={errors}
					/>
				</div>
				<SubmitButton isLoading={isLoading} title='Category' />
			</form>
		</div>
	);
};

export default NewCategory;
