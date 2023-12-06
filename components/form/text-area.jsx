import React from "react";

const TextArea = ({
	name,
	label,
	register,
	isRequired = true,
	errors,
	className = "sm:col-span-2",
	...rest
}) => {
	return (
		<div className={`${className} mt-4`}>
			<label
				htmlFor={name}
				className='block mb-2 text-base font-medium text-primary-foreground leading-6'
			>
				{label}
			</label>
			<textarea
				rows={5}
				name={name}
				id={name}
				className={`w-full bg-secondary border-[#222A36] text-primary-foreground text-lg rounded-lg ${
					errors && errors[name] ? "border-red-500" : ""
				}`}
				placeholder={label}
				{...register(name)}
				{...rest}
			/>
			{errors && errors[name] && (
				<p className='text-red-500 text-sm'>{errors[name].message}</p>
			)}
		</div>
	);
};

export default TextArea;
