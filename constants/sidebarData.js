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
} from "lucide-react";

export const MenuData = [
	{ title: "Home", href: "/", icon: <Home /> },

	{
		title: "Inventory",
		submenu: true,
		submenuItems: [
			{
				title: "Items",
				href: "/dashboard/inventory",
				icon: <ListChecks />,
			},
			{
				title: "Category",
				href: "/dashboard/inventory",
				icon: <Boxes />,
			},
			{
				title: "Brand",
				href: "/dashboard/inventory",
				icon: <Boxes />,
			},
			{
				title: "Unit",
				href: "/dashboard/inventory",
				icon: <Boxes />,
			},
			{
				title: "Warehouse",
				href: "/dashboard/inventory",
				icon: <Boxes />,
			},
			{
				title: "Supplier",
				href: "/dashboard/inventory",
				icon: <Truck />,
			},
			{
				title: "Inventory Adjustments",
				href: "/dashboard/inventory",
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
