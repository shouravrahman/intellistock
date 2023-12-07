"use client";
import { useState } from "react";
import clsx from "clsx";
import { ScanSearch } from "lucide-react";

import useSidebarState from "./state/sidebarState";

import Image from "next/image";
import MenuItem from "./menu-item";
import SubMenuItem from "./submenu-item";
import SubscriptionCard from "@/components/cards/subscription-card";
import { sidebarData } from "@/constants/sidebar-options";
const Sidebar = () => {
	const { open, setOpen } = useSidebarState();
	const [subMenuOpen, setSubMenuOpen] = useState(false);

	const toggleSubMenu = (idx) => {
		setSubMenuOpen((prevSubMenuOpen) => ({
			...prevSubMenuOpen,
			[idx]: !prevSubMenuOpen[idx],
		}));
	};

	const containerClasses = clsx(
		"sidebar-bg",
		"p-4",
		"pt-8",
		"h-screen",
		open ? "w-64" : "w-20",
		"fixed",
		"top-0",
		"left-0",
		"h-full",
		"z-15",
		"transition-all",
		"ease-in-out",
		"duration-600",
		"overflow-y-auto",
		"overflow-x-hidden"
	);

	const arrowClasses = clsx(
		"bg-transparent",
		"h-16",
		"w-16",
		"z-15",
		"opacity-50",
		"hover:opacity-100",
		"text-foreground",
		"rounded-full",
		"absolute",
		"top-2/3",
		"transform",
		"-translate-y-1/2",
		"transition-all",
		"duration-300",
		"ease-in",
		"-right-5",
		"outline-none",
		"border-violet-800",
		"cursor-pointer",
		"p-1",
		!open && "rotate-180"
	);
	const logoClasses = clsx(
		// "px-2",
		"transition-all duration-300 ease-in ",
		!open && "w-40 object-contain h-28  -translate-x-14",
		open && "w-full h-28 object-cover translate-x-0"
	);
	const searchInputClasses = clsx(
		"text-base",
		"w-full",
		"bg-form",
		"bg-opacity-40",
		"py-1",
		"rounded-lg",
		"text-foreground",
		"ml-1",
		"placeholder-foreground",
		"focus:outline-none",
		"px-3",
		!open && "hidden"
	);

	return (
		<div className={containerClasses}>
			<button
				className={arrowClasses}
				onClick={() => {
					setOpen(!open);
					setSubMenuOpen({});
				}}
			>
				<Image
					src='/right-arrow-white.svg'
					alt='arrow icon'
					width={50}
					height={50}
				/>
			</button>

			{/* <Warehouse className={warehouseClasses} />
				<h1 className={titleClasses}>Inventory</h1> */}
			<div className='w-60 h-24'>
				<Image
					className={logoClasses}
					src='/logo-transparent.png'
					width={300}
					height={300}
					alt='logo'
					priority
				/>
			</div>

			{/* <div className='flex items-center rounded-md mt-10 py-2'>
				<ScanSearch
					color='#ffffff'
					className={clsx(
						"h-8",
						"w-8",
						"rounded",
						"block",
						"cursor-pointer",
						"ml-2",
						"hover:bg-slate-500",
						open && "mr-2"
					)}
				/>
				<input
					type='search'
					size='100px'
					placeholder='Search'
					className={searchInputClasses}
				/>
			</div> */}

			<ul className='mt-24'>
				{sidebarData.map((menu, idx) => (
					<div key={idx}>
						<MenuItem
							menu={menu}
							open={open}
							subMenuOpen={subMenuOpen[idx]}
							toggleSubMenu={() => toggleSubMenu(idx)}
						/>

						{menu.submenu && subMenuOpen[idx] && open && (
							<ul className='pt-2'>
								{menu.submenuItems.map((submenuItem, subIdx) => (
									<SubMenuItem key={subIdx} submenuItem={submenuItem} />
								))}
							</ul>
						)}
					</div>
				))}
			</ul>

			<SubscriptionCard open={open} />
		</div>
	);
};

export default Sidebar;
