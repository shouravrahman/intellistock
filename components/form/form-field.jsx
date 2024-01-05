"use client";
import React from "react";
import TextInput from "./text-input";
import TextArea from "./text-area";

const FormField = ({
	type,
	label,
	name,
	className,
	register,
	errors,
	initialData,
}) => {
	switch (type) {
		case "text":
			return (
				<TextInput
					label={label}
					name={name}
					register={register}
					errors={errors}
					defaultValue={initialData ? initialData[name] : ""}
					className={className}
				/>
			);
		case "textarea":
			return (
				<TextArea
					label={label}
					name={name}
					register={register}
					errors={errors}
					defaultValue={initialData ? initialData[name] : ""}
					className={className}
				/>
			);
		// Add more cases for other field types as needed
		default:
			return null;
	}
};

export default FormField;
