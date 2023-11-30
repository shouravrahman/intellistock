"use client";

import FormHeader from "@/components/dashboard/form-header";
import TransferInventoryForm from "../(components)/transfer-stock-form";
import AddStockForm from "../(components)/add-stock-form";
import Tabs from "@/components/shared/tabs";

const NewAdjustments = () => {
	return (
		<div>
			<FormHeader title='New Warehouse' href='/dashboard/inventory' />
			<Tabs>
				<Tabs.Tab label='↕️ Transfer Stock'>
					{/* Your content for Tab 1 */}
					<TransferInventoryForm />
				</Tabs.Tab>
				<Tabs.Tab label='+ Add Stock'>
					{/* Your content for Tab 2 */}
					<AddStockForm />
				</Tabs.Tab>
			</Tabs>
		</div>
	);
};

export default NewAdjustments;
