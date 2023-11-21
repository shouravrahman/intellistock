import FixedHeader from "@/components/dashboard/FixedHeader";
import InventoryOptionCard from "@/components/dashboard/InventoryOptionCard";
import { optionsData } from "@/constants/inventoryOptionsData";

import React from "react";

const Inventory = () => {
	return (
		<div>
			<FixedHeader href='/dashboard/inventory/items/new' />
			<div className='grid grid-cols-1 lg:grid-cols-2 px-16 py-8 gap-6'>
				{optionsData?.map((item, idx) => {
					return (
						<InventoryOptionCard
							key={idx}
							title={item.title}
							description={item.description}
							linkTitle={item.linkTitle}
							href={item.href}
							img={item.img}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Inventory;
