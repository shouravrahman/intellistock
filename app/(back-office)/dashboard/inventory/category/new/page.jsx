"use client";

import FormHeader from "@/components/dashboard/FormHeader";
import { z } from "zod";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextArea from "@/components/FormInputs/TextArea";
import useSubmit from "@/lib/hooks/useSubmit";
import handleRequest from "@/lib/api";
import { notify } from "@/lib/toaster";

const CategorySchema = z.object({
	title: z
		.string()
		.min(3, { message: "title must be minimum 3 charecters long" })
		.max(50, { message: "title can not be more than 50 charecters" }),

	description: z
		.string()
		.min(30, {
			message: "Category description must be minimum 30 charecters long",
		})
		.max(450, {
			message: "Category description can not be more than 450 charecters",
		}),
});

const NewCategory = () => {
	const { register, handleSubmit, errors, isSubmitting } = useSubmit(
		CategorySchema,
		async (data) => {
			try {
				await handleRequest("/api/category", "POST", data);
				notify("success", "  New category created!");
			} catch (error) {
				// Handle or log the error
				console.log(error);
			}
		}
	);

	return (
		<div className='font-rubik font-medium text-base'>
			{/* header */}
			<FormHeader title='New Category' href='/dashboard/inventory/' />

			{/* form */}
			<form
				onSubmit={handleSubmit}
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
						name='description'
						label='Category Description'
						errors={errors}
					/>
				</div>
				<SubmitButton isSubmitting={isSubmitting} title='Category' />
			</form>
		</div>
	);
};

export default NewCategory;
