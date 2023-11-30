// SelectInput.js
import React from "react";

const Select = ({ label, name, register, errors, options }) => {
	return (
		<div className='my-4'>
			<label className='block mb-2 text-base font-medium text-gray-900'>
				{label}
			</label>
			<select
				{...register(name)}
				className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg'
			>
				{options?.map((option, i) => (
					<option className='m-2 font-semibold' key={i} value={option.id}>
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
