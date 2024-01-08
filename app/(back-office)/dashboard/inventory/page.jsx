import InventoryOptionCard from "@/components/cards/inventory-option-card";
import FixedHeader from "@/components/dashboard/fixed-header";
import { options } from "@/constants/inventory-options";
import React from "react";

const Inventory = () => {
	return (
		<div>
			<FixedHeader href='/dashboard/inventory/items/new' />
			<div className='max-w-max mx-auto grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 px-8 md:px-16 py-8 gap-6'>
				{options?.map((item, idx) => {
					return (
						<InventoryOptionCard
							key={idx}
							title={item.title}
							description={item.description}
							linkTitle={item.linkTitle}
							href={item.href}
							img={item.img}
							enabled={item.enabled}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Inventory;
