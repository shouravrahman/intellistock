import FixedHeader from "@/components/dashboard/fixed-header";
import DataTable from "@/components/table/data-table";
import { categoryColumns } from "@/components/table/columns";
import { getData } from "@/lib/data-access/getData";

const Category = async () => {
	const data = await getData("category");
	return (
		<>
			<div>
				<FixedHeader
					title='Categories'
					href='/dashboard/inventory/category/new'
				/>
				<DataTable columns={categoryColumns} data={data || []} />
			</div>
			{/* table */}
		</>
	);
};

export default Category;
