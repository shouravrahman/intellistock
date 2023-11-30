import SalesOverview from "@/components/cards/sales-overview";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import React from "react";

const Overview = () => {
	return (
		<div className=''>
			<DashboardBanner />
			<SalesOverview />
		</div>
	);
};

export default Overview;
