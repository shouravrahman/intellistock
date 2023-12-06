import FixedHeader from "@/components/dashboard/fixed-header";
import DataTable from "@/components/table/data-table";
import { itemColumns } from "@/components/table/columns";
import { getData } from "@/lib/data-access/getData";

// async function getData() {
// 	return [
// 		{
// 			id: "q8p4z7r2",
// 			title: "Reiner",
// 			description: "fiefuwff",
// 		},
// 	];
// }

const Items = async () => {
	const data = await getData("items");
	return (
		<>
			<div>
				<FixedHeader title='All Items' href='/dashboard/inventory/items/new' />
				<DataTable columns={itemColumns} data={data || []} />
			</div>
			{/* table */}
		</>
	);
};

export default Items;
