import FormHeader from "@/components/dashboard/FormHeader";
import CreateItemForm from "@/components/dashboard/CreateItemForm";
import { getData } from "@/lib/api_functions/getData";

const ItemsForm = async () => {
	//sequencial fetchcing ,waterfall
	const categoriesData = getData("category");
	const unitsData = getData("unit");
	const brandsData = getData("brand");
	const suppliersData = getData("supplier");
	const warehousesData = getData("warehouse");

	//fetch parallel

	const [categories, units, brands, suppliers, warehouses] = await Promise.all([
		categoriesData,
		unitsData,
		brandsData,
		suppliersData,
		warehousesData,
	]);

	return (
		<div>
			<FormHeader title='New Item' href='/dashboard/inventory' />
			<CreateItemForm
				categoryOptions={categories}
				brandOptions={brands}
				unitOptions={units}
				supplierOptions={suppliers}
				warehouseOptions={warehouses}
			/>
		</div>
	);
};

export default ItemsForm;
