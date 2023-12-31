import FixedHeader from "@/components/dashboard/fixed-header";
import DataTable from "@/components/table/data-table";
import { unitColumns } from "@/components/table/columns";
import { getData } from "@/lib/data-access/getData";

const Unit = async () => {
	const data = await getData("unit");
	return (
		<>
			<div>
				<FixedHeader title='units' href='/dashboard/inventory/unit/new' />
				<DataTable columns={unitColumns} data={data || []} />
			</div>
			{/* table */}
		</>
	);
};

export default Unit;
