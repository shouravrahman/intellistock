// SelectInput.js
import React from "react";

const Select = ({ label, name, register, errors, options }) => {
	return (
		<div className='my-4'>
			<label className='block mb-2 text-base font-medium text-primary-foreground'>
				{label}
			</label>
			<select
				{...register(name)}
				className='w-full   bg-form  border-[#222A36] text-primary-foreground text-base rounded-lg'
			>
				{options?.map((option) => (
					<option
						className='m-2  bg-violet-50 bg-opacity-40 text-primary-foreground'
						key={option.id}
						value={option.id}
					>
						{option.title || option.value}
					</option>
				))}
			</select>
			{errors[name] && (
				<p className='text-red-500 text-sm'>{errors[name].message}</p>
			)}
		</div>
	);
};

export default Select;
