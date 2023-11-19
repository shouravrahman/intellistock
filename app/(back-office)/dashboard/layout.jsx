"use client";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/sidebar";
import useSidebarState from "@/components/dashboard/sidebar/state/sidebarState";
import React from "react";

const Layout = ({ children }) => {
	const { open } = useSidebarState();
	return (
		<div className='flex'>
			<div className='w-full flex-1 min-h-screen'>
				<Sidebar />
			</div>
			<main
				className={`w-full ${
					open ? "ml-60" : "ml-20"
				} flex-2 bg-transparent transition-all ease-in-out duration-600 ml-1`}
			>
				<Header />
				{children}
			</main>
		</div>
	);
};

export default Layout;
