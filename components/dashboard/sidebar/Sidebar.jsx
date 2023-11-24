"use client";
import { useState } from "react";
import clsx from "clsx";
import { ArrowLeft, ScanSearch, Warehouse, WarehouseIcon } from "lucide-react";
import MenuItem from "./MenuItem";
import SubMenuItem from "./SubmenuItem";
import SubscriptionCard from "../SubscriptionCard";
import useSidebarState from "./state/sidebarState";
import { MenuData } from "@/constants/sidebarData";
import Image from "next/image";
import Icon from "./Icon";
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
		"min-h-screen",
		open ? "w-64" : "w-20",
		"fixed",
		"transition-all",
		"ease-in-out",
		"duration-600"
	);

	const arrowClasses = clsx(
		"bg-vercel-black",
		"h-9",
		"w-9",
		"z-10",
		"text-vercel-white",
		"rounded-full",
		"absolute",
		"-right-4",
		"bottom-9",
		"border",
		"border-white",
		"outline-none",
		"border-purple-800",
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
		"bg-purple-50",
		"bg-opacity-40",
		"py-1",
		"rounded-lg",
		"text-vercel-white",
		"ml-1",
		"placeholder-white",
		"focus:outline-none",
		"px-3",
		!open && "hidden"
	);

	return (
		<div className={containerClasses}>
			<ArrowLeft
				className={arrowClasses}
				onClick={() => {
					setOpen(!open);
					setSubMenuOpen({});
				}}
			/>

			{/* <Warehouse className={warehouseClasses} />
				<h1 className={titleClasses}>Inventory</h1> */}
			<div className='w-60 h-24'>
				<Image
					className={logoClasses}
					src='/logo-transparent.png'
					width={100}
					height={100}
					alt='logo'
				/>
			</div>

			<div className='flex items-center rounded-md mt-10 py-2'>
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
			</div>

			<ul className='pt-2'>
				{MenuData.map((menu, idx) => (
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
