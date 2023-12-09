import FixedHeader from "@/components/dashboard/fixed-header";
import DataTable from "@/components/table/data-table";
import {
	stockAddColumns,
	stockTransferColumns,
	warehouseColumns,
} from "@/components/table/columns";
import { getData } from "@/lib/data-access/getData";

const Warehouse = async () => {
	const data = await getData("warehouse");
	return (
		<>
			<div>
				<FixedHeader
					title='Warehouses'
					href='/dashboard/inventory/warehouse/new'
				/>
				<DataTable columns={stockAddColumns} data={data || []} />
				<DataTable columns={stockTransferColumns} data={data || []} />
			</div>
			{/* table */}
		</>
	);
};

export default Warehouse;
