"use client";
import useSubmit from "@/lib/hooks/useSubmit";
import handleRequest from "@/lib/api";
import { notify } from "@/lib/toaster";
import FormHeader from "@/components/dashboard/form-header";
import TextInput from "@/components/form/text-input";
import SubmitButton from "@/components/form/submit-button";
import { UnitsSchema } from "@/validations/units-schema";

const UnitsForm = () => {
	const { register, handleSubmit, errors, isSubmitting } = useSubmit(
		UnitsSchema,
		async (data) => {
			try {
				await handleRequest("/api/unit", "POST", data);
				notify("success", "New unit created!");
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
				className='w-full max-w-4xl p-8   bg-form text-primary-foreground    rounded-lg shadow mx-auto mt-8'
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
						<label className='block mb-2 text-lg font-medium '>
							Default Unit
						</label>
						<input
							type='checkbox'
							{...register("defaultUnit")}
							className='mr-2'
						/>
						<span className=''>Set as default unit</span>
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
