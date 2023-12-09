import React from "react";

const InventorySummaryCard = ({ title, number }) => {
	return (
		<div>
			<div className='shadow-sm px-4 py-2 rounded-lg bg-table cursor-pointer hover:border hover:border-border flex-between gap-3 transition-all ease-in duration-200 mt-4'>
				<h2 className='uppercase text-foreground text-sm'>{title}</h2>
				<h4 className='text-xl '>{number}</h4>
			</div>
		</div>
	);
};

export default InventorySummaryCard;
