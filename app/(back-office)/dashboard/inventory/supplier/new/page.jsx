"use client";

import useSubmit from "@/lib/hooks/useSubmit";
import handleRequest from "@/lib/api";
import { notify } from "@/lib/toaster";
import FormHeader from "@/components/dashboard/form-header";
import TextInput from "@/components/form/text-input";
import TextArea from "@/components/form/text-area";
import { SupplierSchema } from "@/validations/supplier-schema";
import SubmitButton from "@/components/form/submit-button";

const SupplierForm = () => {
	const { register, errors, handleSubmit, isSubmitting } = useSubmit(
		SupplierSchema,
		async (data) => {
			try {
				// Replace "/api/unit" with the appropriate API route for   suppliers
				await handleRequest("/api/supplier", "POST", data);
				notify("success", "New Supplier created!");
			} catch (error) {
				// Handle or log the error
				console.log(error);
			}
		}
	);

	return (
		<div>
			<FormHeader title='New Supplier' href='/dashboard/suppliers' />
			<form
				onSubmit={handleSubmit}
				className='w-full max-w-4xl p-8   bg-form text-foreground    rounded-lg shadow mx-auto mt-8'
			>
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
					<TextInput
						label="Supplier's Name"
						name='title'
						register={register}
						errors={errors}
						isRequired={true}
					/>
					<TextInput
						label='Phone Number'
						name='phone'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<TextInput
						label='Email'
						name='email'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<TextInput
						label='Address'
						name='address'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<TextInput
						label='Contact Person'
						name='contactPerson'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<TextInput
						label='Supplier Code'
						name='supplierCode'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<TextInput
						label='Tax ID / TIN'
						name='taxID'
						register={register}
						errors={errors}
						className='w-full'
					/>
					<TextArea
						label='Payment Terms'
						name='paymentTerms'
						register={register}
						errors={errors}
					/>
					<TextArea
						label='Notes'
						name='notes'
						register={register}
						errors={errors}
					/>

					<div className='py-4'>
						<SubmitButton title='Supplier' isSubmitting={isSubmitting} />
					</div>
				</div>
			</form>
		</div>
	);
};

export default SupplierForm;
