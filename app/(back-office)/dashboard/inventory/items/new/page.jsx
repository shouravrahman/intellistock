import FormHeader from "@/components/dashboard/form-header";
import { getData } from "@/lib/data-access/getData";
import CreateItemForm from "../(components)/create-item-form";

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
