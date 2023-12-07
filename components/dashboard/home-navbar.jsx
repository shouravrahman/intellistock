"use client";

import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HomeNavbar = () => {
	const pathname = usePathname();

	const navlinks = [
		{ title: "Dashboard", href: "/dashboard/home/overview" },
		{ title: "Getting Started", href: "/dashboard/home/getting-started" },
		{ title: "Recent Updates", href: "/dashboard/home/updates" },
		{ title: "Announcements", href: "/dashboard/home/announcements" },
	];
	return (
		<div className='h-32 p-5 header-bg border-b border-border'>
			<div className='flex space-x-3 ml-4'>
				<div className='flex-center rounded-lg w-12 h-12 bg-form text-foreground mr-4'>
					<Building2 />
				</div>
				<div className='flex flex-col text-foreground/80'>
					<p className='font-semibold'>Hello, Shourav Rahman</p>
					<span className='italic'>Sylhet, Bangladesh</span>
				</div>
			</div>

			<nav className='sticky bottom-0 ml-4 mt-6 flex space-x-6 font-medium'>
				{navlinks.map((item, idx) => {
					return (
						<Link
							key={idx}
							href={item.href}
							className={`py-[1px] font-noto font-normal text-foreground/80  mt-2  ${
								pathname === item.href
									? "border-b-4 border-foreground text-accent transition-all ease-in z-10"
									: ""
							}`}
						>
							{item.title}
						</Link>
					);
				})}
			</nav>
		</div>
	);
};

export default HomeNavbar;
