"use client";
import useSubmit from "@/lib/hooks/useSubmit";
import FormHeader from "../dashboard/form-header";
import FormField from "./form-field";
import SubmitButton from "./submit-button";
import handleRequest from "../../lib/api";
import { notify } from "@/lib/toaster";
const Form = ({
	title,
	fields,
	apiEndpoint,
	successMessage,
	initialData,
	isUpdate,
}) => {
	const { register, handleSubmit, errors, isSubmitting } = useSubmit(
		fields.schema,

		async (data) => {
			try {
				const method = isUpdate ? "PUT" : "POST";
				const endpoint = isUpdate
					? `${apiEndpoint}/${initialData?.id}`
					: apiEndpoint;
				console.log(method, endpoint);
				await handleRequest(endpoint, method, data);
				notify("success", successMessage);
			} catch (error) {
				// Handle or log the error
				console.log(error);
			}
		},
		initialData
	);

	return (
		<div className='font-rubik font-medium text-base'>
			{/* header */}
			<FormHeader title={title} href='/dashboard/inventory/' />

			{/* form */}
			<form
				onSubmit={handleSubmit}
				className='w-full max-w-4xl p-4 md:p-8 bg-form text-foreground rounded-lg shadow sm:p-6 mx-auto mt-8'
			>
				{/* Render fields dynamically based on the provided configuration */}
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
					{fields.items.map((field, index) => (
						<FormField
							key={index}
							register={register}
							errors={errors}
							initialData={initialData}
							{...field}
						/>
					))}
				</div>
				<SubmitButton isSubmitting={isSubmitting} title={title} />
			</form>
		</div>
	);
};
export default Form;
