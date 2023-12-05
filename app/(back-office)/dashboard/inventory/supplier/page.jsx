import FixedHeader from "@/components/dashboard/fixed-header";
import DataTable from "@/components/table/data-table";
import { supplierColumns } from "@/components/table/columns";
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

const Supplier = async () => {
	const data = await getData("supplier");
	return (
		<>
			<div>
				<FixedHeader
					title='Categories'
					href='/dashboard/inventory/supplier/new'
				/>
				<DataTable columns={supplierColumns} data={data} />
			</div>
			{/* table */}
		</>
	);
};

export default Supplier;
