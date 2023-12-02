import FormHeader from "@/components/dashboard/form-header";
import { getData } from "@/lib/data-access/getData";
import AdjustmentForm from "../(components)/adjustment-form";

const NewAdjustments = async () => {
	const items = await getData("items");
	const warehouse = await getData("warehouse");
	return (
		<div>
			<FormHeader title='New Warehouse' href='/dashboard/inventory' />
			<AdjustmentForm items={items} warehouse={warehouse} />
		</div>
	);
};

export default NewAdjustments;
