import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const useSubmit = (schema, onSubmitCallback) => {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const onSubmit = async (data) => {
		try {
			await onSubmitCallback(data);
			reset();
		} catch (error) {
			console.error(error);
		}
	};

	return {
		register,
		handleSubmit: handleSubmit(onSubmit),
		errors,
		isSubmitting,
	};
};

export default useSubmit;
