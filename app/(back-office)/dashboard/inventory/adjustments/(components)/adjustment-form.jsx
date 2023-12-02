"use client";
import Tabs from "@/components/shared/tabs";
import React from "react";
import TransferInventoryForm from "./transfer-stock-form";
import AddStockForm from "./add-stock-form";

const AdjustmentForm = ({ items, warehouse }) => {
	return (
		<Tabs>
			<Tabs.Tab label='↕️ Transfer Stock'>
				{/* Your content for Tab 1 */}
				<TransferInventoryForm items={items} warehouse={warehouse} />
			</Tabs.Tab>
			<Tabs.Tab label='+ Add Stock'>
				{/* Your content for Tab 2 */}
				<AddStockForm warehouse={warehouse} items={items} />
			</Tabs.Tab>
		</Tabs>
	);
};

export default AdjustmentForm;
