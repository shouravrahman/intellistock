import FixedHeader from "@/components/dashboard/fixed-header";
import DataTable from "@/components/table/data-table";
import { brandColumns } from "@/components/table/columns";
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

const Brand = async () => {
	const data = await getData("brand");
	return (
		<>
			<div>
				<FixedHeader title='Brands' href='/dashboard/inventory/brand/new' />
				<DataTable columns={brandColumns} data={data || []} />
			</div>
			{/* table */}
		</>
	);
};

export default Brand;
