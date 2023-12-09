import { CheckCircle } from "lucide-react";
import React from "react";
import SalesActivityCard from "./sales-activity-card";
import InventorySummaryCard from "./inventory-summary-card";

const SalesOverview = () => {
	const salesActivity = [
		{
			number: 10,
			title: "to be packed",
			unit: "Qty",
			icon: <CheckCircle />,
			href: "#",
			color: "text-red-500",
		},
		{
			number: 10,
			title: "to be shipped",
			unit: "Pkgs",
			icon: <CheckCircle />,
			href: "#",
			color: "text-violet-500",
		},
		{
			number: 10,
			title: "to be delivered",
			unit: "Pkgs",
			icon: <CheckCircle />,
			href: "#",
			color: "text-green-500",
		},
		{
			number: 10,
			title: "to be invoiced",
			unit: "Qty",
			icon: <CheckCircle />,
			href: "#",
			color: "text-yellow-500",
		},
	];

	const inventorySummary = [
		{ title: "Qunatity in hand", number: 10 },
		{ title: "Qunatity to be recieved", number: 8 },
	];
	return (
		<div className=' bg-form/70 border-b border-border grid grid-cols-12 gap-8 text-foreground'>
			{/* sales activity */}
			<div className='border-r border-border col-span-8 p-8'>
				<h2 className='mb-6 text-xl'>Sales Activity</h2>
				{/* single card */}
				<div className='grid grid-cols-4 gap-4 pr-8'>
					{salesActivity.map((item, idx) => {
						return <SalesActivityCard key={idx} {...item} />;
					})}
				</div>
			</div>
			{/* inventory summary */}
			<div className='col-span-4 p-8 '>
				<h2 className='mb-6 text-xl'>Inventory Summary</h2>

				{inventorySummary.map((item, idx) => {
					return <InventorySummaryCard key={idx} {...item} />;
				})}
			</div>
		</div>
	);
};

export default SalesOverview;
