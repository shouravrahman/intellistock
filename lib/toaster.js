import { toast } from "react-toastify";

export const notify = (state, message) => {
	switch (state) {
		case "success":
			toast.success(message);
			break;
		case "error":
			toast.error(message);
			break;
		case "warning":
			toast.warning(message);
			break;
		case "info":
			toast.info(message);
			break;
		default:
			// Handle other states if needed
			break;
	}
};
