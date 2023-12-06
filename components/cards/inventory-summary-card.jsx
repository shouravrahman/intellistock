import React from "react";

const InventorySummaryCard = ({ title, number }) => {
	return (
		<div>
			<div className='shadow-sm px-4 py-2 border-border rounded-lg bg-foreground cursor-pointer hover:border-slate-600 flex-between gap-3 transition-all ease-in duration-200 mt-4'>
				<h2 className='uppercase text-slate-500 text-sm'>{title}</h2>
				<h4 className='text-xl '>{number}</h4>
			</div>
		</div>
	);
};

export default InventorySummaryCard;
