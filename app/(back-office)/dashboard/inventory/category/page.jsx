import FixedHeader from "@/components/dashboard/fixed-header";
import DataTable from "@/components/table/data-table";
import { columns } from "@/components/table/columns";

async function getData() {
	return [
		{
			id: "q8p4z7r2",
			amount: 573,
			status: "completed",
			email: "user1@example.com",
		},
		{
			id: "t2f9s6d1",
			amount: 247,
			status: "pending",
			email: "user2@example.com",
		},
		{
			id: "m5v7n8p3",
			amount: 891,
			status: "failed",
			email: "user3@example.com",
		},
		{
			id: "g1k9o4s7",
			amount: 432,
			status: "completed",
			email: "user1@example.com",
		},
		{
			id: "r3d8m2v1",
			amount: 689,
			status: "pending",
			email: "user2@example.com",
		},
		{
			id: "w6x7y5z3",
			amount: 124,
			status: "failed",
			email: "user3@example.com",
		},
		{
			id: "p9q2r5s8",
			amount: 431,
			status: "completed",
			email: "user1@example.com",
		},
		{
			id: "t7v4w1x9",
			amount: 876,
			status: "pending",
			email: "user2@example.com",
		},
		{
			id: "k3l7m8n1",
			amount: 209,
			status: "failed",
			email: "user3@example.com",
		},
		{
			id: "g2a8b4c1",
			amount: 589,
			status: "completed",
			email: "user1@example.com",
		},
		{
			id: "z6d5f1h8",
			amount: 753,
			status: "pending",
			email: "user2@example.com",
		},
		{
			id: "u1v2w3x4",
			amount: 324,
			status: "failed",
			email: "user3@example.com",
		},
		{
			id: "y5z8a1b3",
			amount: 987,
			status: "completed",
			email: "user1@example.com",
		},
		{
			id: "r4g5k1l8",
			amount: 145,
			status: "pending",
			email: "user2@example.com",
		},
	];
}
const Category = async () => {
	const data = await getData();
	return (
		<>
			<div>
				<FixedHeader
					title='Categories'
					href='/dashboard/inventory/category/new'
				/>
				<DataTable columns={columns} data={data} />
			</div>
			{/* table */}
		</>
	);
};

export default Category;
