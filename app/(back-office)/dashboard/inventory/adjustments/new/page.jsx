"use client";
import AddInventoryStockForm from "@/components/dashboard/AddInventoryStockForm";
import FormHeader from "@/components/dashboard/FormHeader";
import TransferInventoryForm from "@/components/dashboard/TransferInventoryForm";
import Tabs from "@/components/shared/Tabs";

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
					<AddInventoryStockForm />
				</Tabs.Tab>
			</Tabs>
		</div>
	);
};

export default NewAdjustments;
