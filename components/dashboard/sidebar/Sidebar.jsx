"use client";
import React, { useState } from "react";
import clsx from "clsx";
import {
	ArrowLeft,
	BookOpen,
	FolderDot,
	FolderKanban,
	GalleryHorizontalEnd,
	Inbox,
	Kanban,
	LayoutDashboard,
	ScanSearch,
	Settings,
	User2,
	Warehouse,
} from "lucide-react";
import MenuItem from "./MenuItem";
import SubMenuItem from "./SubmenuItem";

const Sidebar = () => {
	// ... (unchanged code)
	const [open, setOpen] = useState(false);
	const [subMenuOpen, setSubMenuOpen] = useState(false);

	const MenuData = [
		{ title: "Home", href: "/", icon: <LayoutDashboard /> },
		{ title: "Inventory", href: "/", icon: <BookOpen />, spacing: true },
		{ title: "Sales", href: "/", icon: <GalleryHorizontalEnd /> },
		{
			title: "Projects",
			submenu: true,
			submenuItems: [
				{ title: "Project 1", href: "/", icon: <FolderDot /> },
				{ title: "Project 2", href: "/", icon: <FolderDot /> },
			],
			href: "/",
			icon: <FolderKanban />,
		},
		{ title: "Analytics", href: "/", icon: <Kanban />, spacing: true },
		{ title: "Reports", href: "/", icon: <Inbox /> },
		{ title: "Profile", href: "/", icon: <User2 /> },
		{ title: "Setting", href: "/", icon: <Settings /> },
	];

	const containerClasses = clsx(
		"bg-purple-950",
		"p-5",
		"pt-8",
		"min-h-screen",
		open ? "w-full" : "w-20",
		"relative",
		"transition-all",
		"ease-in",
		"duration-200"
	);

	const arrowClasses = clsx(
		"bg-white",
		"h-9",
		"w-9",
		"text-purple-950",
		"rounded-full",
		"absolute",
		"-right-4",
		"bottom-9",
		"border",
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
		"duration-500",
		"ease-in",
		"mr-2",
		open && "rotate-[360deg]"
	);

	const titleClasses = clsx(
		"text-white",
		"origin-left",
		"font-medium",
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
			<ArrowLeft className={arrowClasses} onClick={() => setOpen(!open)} />

			<div className='inline-flex justify-between items-center'>
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
							subMenuOpen={subMenuOpen}
							setSubMenuOpen={setSubMenuOpen}
						/>

						{menu.submenu && subMenuOpen && open && (
							<ul>
								{menu.submenuItems.map((submenuItem, idx) => (
									<SubMenuItem key={idx} submenuItem={submenuItem} />
								))}
							</ul>
						)}
					</div>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
