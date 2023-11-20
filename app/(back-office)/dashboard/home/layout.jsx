import Header from "@/components/dashboard/Header";
import HomeNavbar from "@/components/dashboard/HomeNavbar";
import Sidebar from "@/components/dashboard/sidebar";
import useSidebarState from "@/components/dashboard/sidebar/state/sidebarState";
import React from "react";
import Poppins from "next/font/google";
const Layout = ({ children }) => {
	return (
		<main className='font-noto font-medium h-screen bg-teal-100'>
			<HomeNavbar />
			{children}
		</main>
	);
};

export default Layout;
