import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/sidebar";
import React from "react";

const Layout = ({ children }) => {
	return (
		<div className='flex'>
			<div className='w-full flex-1 min-h-screen'>
				<Sidebar />
			</div>
			<main className='w-full flex-2 bg-transparent'>
				<Header />
				{children}
			</main>
		</div>
	);
};

export default Layout;
