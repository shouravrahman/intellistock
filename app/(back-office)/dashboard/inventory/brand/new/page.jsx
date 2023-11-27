"use client";
import { z } from "zod";
import TextInput from "@/components/FormInputs/TextInput";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import useSubmit from "@/lib/hooks/useSubmit";
import handleRequest from "@/lib/api";
import { notify } from "@/lib/toaster";

const BrandSchema = z.object({
	title: z.string().min(3).max(50),
});

const BrandsForm = () => {
	const { register, handleSubmit, errors, isSubmitting } = useSubmit(
		BrandSchema,
		async (data) => {
			try {
				await handleRequest("/api/brand", "POST", data);
				notify("success", "  New brand created!");
			} catch (error) {
				// Handle or log the error
				console.log(error);
			}
		}
	);

	return (
		<div>
			<FormHeader title='New Brand' href='/dashboard/inventory' />
			<form
				onSubmit={handleSubmit}
				className='w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-lg shadow mx-auto mt-8'
			>
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
					<TextInput
						label='Brand Name'
						name='title'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<div className='py-4'>
						<SubmitButton title='Brand' isSubmitting={isSubmitting} />
					</div>
				</div>
			</form>
		</div>
	);
};

export default BrandsForm;
