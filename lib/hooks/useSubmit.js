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
			console.log(response);
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
