import { AlternateIcons } from "@/components/dashboard/sidebar/Icon";
import {
	BadgeDollarSign,
	BaggageClaim,
	BarChart4,
	Blocks,
	Boxes,
	Diff,
	FileText,
	Home,
	ListChecks,
	ListOrdered,
	Package,
	PiggyBank,
	Receipt,
	ScrollText,
	StickyNote,
	Truck,
	Undo2,
	Users2,
	Wallet,
	Warehouse,
} from "lucide-react";

export const sidebarData = [
	{ title: "Home", href: "/dashboard/home/overview", icon: <Home /> },

	{
		title: "Inventory",
		submenu: true,
		submenuItems: [
			{
				title: "Items",
				href: "/dashboard/inventory/items",
				icon: <ListChecks />,
			},
			{
				title: "Category",
				href: "/dashboard/inventory/category",
				icon: (
					<AlternateIcons
						src='/category.png'
						alt='unit'
						width={25}
						height={25}
					/>
				),
			},
			{
				title: "Brand",
				href: "/dashboard/inventory/brand",
				icon: (
					<AlternateIcons src='/brand.png' alt='unit' width={25} height={25} />
				),
			},
			{
				title: "Unit",
				href: "/dashboard/inventory/unit",
				icon: (
					<AlternateIcons src='/unit.png' alt='unit' width={25} height={25} />
				),
			},
			{
				title: "Warehouse",
				href: "/dashboard/inventory/warehouse",
				icon: <Warehouse />,
			},
			{
				title: "Supplier",
				href: "/dashboard/inventory/supplier",
				icon: <Truck />,
			},
			{
				title: "Inventory Adjustments",
				href: "/dashboard/inventory/adjustments",
				icon: <Diff />,
			},
		],
		href: "/dashboard/inventory",
		icon: <BaggageClaim />,
	},
	{
		title: "Sales",
		submenu: true,
		submenuItems: [
			{ title: "Customers", href: "#", icon: <Users2 /> },
			{ title: "Sales Orders", href: "#", icon: <ListOrdered /> },
			{ title: "Packages", href: "#", icon: <Package /> },
			{ title: "Shipments", href: "#", icon: <Truck /> },
			{ title: "Invoices", href: "#", icon: <ScrollText /> },
			{ title: "Sales Receipts", href: "#", icon: <Receipt /> },
			{ title: "Payments Received", href: "#", icon: <PiggyBank /> },
			{ title: "Sales Returns", href: "#", icon: <Undo2 /> },
			{ title: "Credit Notes", href: "#", icon: <StickyNote /> },
		],
		href: "#",
		icon: <Wallet />,
	},
	{
		title: "Purchases",
		submenu: true,
		submenuItems: [
			{ title: "Project 1", href: "/" },
			{ title: "Project 2", href: "/" },
		],
		href: "#",
		icon: <BadgeDollarSign />,
	},

	{ title: "Integrations", href: "#", icon: <Blocks /> },
	{ title: "Reports", href: "#", icon: <BarChart4 /> },
	{ title: "Documents", href: "#", icon: <FileText /> },
];
