"use client";
import { useState } from "react";
import clsx from "clsx";
import {
	ArrowLeft,
	BadgeDollarSign,
	BaggageClaim,
	BarChart4,
	Blocks,
	FileText,
	Home,
	ScanSearch,
	Wallet,
	Warehouse,
} from "lucide-react";
import MenuItem from "./MenuItem";
import SubMenuItem from "./SubmenuItem";
import SubscriptionCard from "../SubscriptionCard";
import useSidebarState from "./state/sidebarState";

const Sidebar = () => {
	const { open, setOpen } = useSidebarState();
	const [subMenuOpen, setSubMenuOpen] = useState(false);

	const toggleSubMenu = (idx) => {
		setSubMenuOpen((prevSubMenuOpen) => ({
			...prevSubMenuOpen,
			[idx]: !prevSubMenuOpen[idx],
		}));
	};
	const MenuData = [
		{ title: "Home", href: "/", icon: <Home /> },

		{
			title: "Inventory",
			submenu: true,
			submenuItems: [
				{ title: "Project 1", href: "/" },
				{ title: "Project 2", href: "/" },
			],
			href: "/",
			icon: <BaggageClaim />,
		},
		{
			title: "Sales",
			submenu: true,
			submenuItems: [
				{ title: "Project 1", href: "/" },
				{ title: "Project 2", href: "/" },
			],
			href: "/",
			icon: <Wallet />,
		},
		{
			title: "Purchases",
			submenu: true,
			submenuItems: [
				{ title: "Project 1", href: "/" },
				{ title: "Project 2", href: "/" },
			],
			href: "/",
			icon: <BadgeDollarSign />,
		},

		{ title: "Integrations", href: "/", icon: <Blocks /> },
		{ title: "Reports", href: "/", icon: <BarChart4 /> },
		{ title: "Documents", href: "/", icon: <FileText /> },
	];

	const containerClasses = clsx(
		"sidebar-bg",
		"p-5",
		"pt-8",
		"min-h-screen",
		open ? "w-64" : "w-20",
		"fixed",
		"transition-all",
		"ease-in-out",
		"duration-600"
	);

	const arrowClasses = clsx(
		"bg-slate-900",
		"h-9",
		"w-9",
		"text-white",
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

	const warehouseClasses = clsx(
		"bg-amber-400",
		"h-10",
		"w-10",
		"rounded",
		"p-1",
		"cursor-pointer",
		"duration-300",
		"ease-in",
		"mr-2",
		open && "rotate-[360deg]"
	);

	const titleClasses = clsx(
		"text-white",
		"origin-left",
		"font-medium",
		"text-2xl",
		!open && "scale-0",
		"duration-300",
		"ease-in"
	);

	const searchInputClasses = clsx(
		"text-base",
		"w-full",
		"bg-purple-50",
		"bg-opacity-40",
		"py-1",
		"rounded-lg",
		"text-white",
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

			<div className='inline-flex gap-6'>
				<Warehouse className={warehouseClasses} />
				<h1 className={titleClasses}>Inventory</h1>
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
							<ul>
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
