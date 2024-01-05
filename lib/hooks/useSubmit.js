import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const useSubmit = (schema, onSubmitCallback, defaultValue = null) => {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(schema),
		defaultValues: defaultValue,
	});

	const onSubmit = async (data) => {
		try {
			await onSubmitCallback(data);
			// console.log(response);
			// Assuming the response contains information about the success
		} catch (error) {
			console.error("Unexpected error:", error);
			// Handle unexpected errors
		} finally {
			reset();
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
