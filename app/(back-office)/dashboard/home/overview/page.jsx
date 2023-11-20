import DashboardBanner from "@/components/dashboard/DashboardBanner";
import SalesOverview from "@/components/dashboard/SalesOverview";
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
