import FixedHeader from "@/components/dashboard/fixed-header";
import DataTable from "@/components/table/data-table";
import {
	stockAddColumns,
	stockTransferColumns,
	unitColumns,
} from "@/components/table/columns";
import { getData } from "@/lib/data-access/getData";

const Adjustments = async () => {
	const addData = await getData("adjustments/add");
	const transferData = await getData("adjustments/transfer");
	const [add, transfer] = await Promise.all([addData, transferData]);
	return (
		<>
			<div>
				<FixedHeader
					title='Adjustments History'
					href='/dashboard/inventory/adjustments/new'
				/>
				<DataTable columns={stockAddColumns} data={add || []} />
				<DataTable columns={stockTransferColumns} data={transfer || []} />
			</div>
			{/* table */}
		</>
	);
};

export default Adjustments;
