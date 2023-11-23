import React from "react";

const TextInput = ({
	name,
	label,
	register,
	isRequired = false,
	type = "text",
	errors,
	isNumber,
	className = "sm:col-span-2",
	...rest
}) => {
	return (
		<div className={`${className} mt-4`}>
			<label
				htmlFor={name}
				className='block mb-2 text-base font-medium text-gray-900'
			>
				{label}
			</label>
			<input
				type={type}
				name={name}
				id={name}
				className={`w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ${
					errors && errors[name] ? "border-red-500" : ""
				}`}
				autoComplete={name}
				placeholder={label}
				{...register(
					name,
					{ required: isRequired },
					{ valueAsNumber: isNumber }
				)}
				{...rest}
			/>
			{errors && errors[name] && (
				<p className='text-red-500 text-sm'>{errors[name].message}</p>
			)}
		</div>
	);
};

export default TextInput;
