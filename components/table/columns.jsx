"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	ArrowUpDown,
	MoreHorizontal,
	Pencil,
	Trash2,
	Clipboard,
} from "lucide-react";

export const itemColumns = [
	{
		accessorKey: "title",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Item Tiltle
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		accessorKey: "category.title",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Item Category
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		accessorKey: "quantity",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Quantity
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		accessorKey: "buyingPrice",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Buying Price
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		accessorKey: "sellingPrice",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Selling Price
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const Item = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button className='h-8 w-8 p-0'>
							<span className='sr-only'>Open menu</span>
							<MoreHorizontal className='h-4 w-4' />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(Item?.id)}
						>
							<Clipboard className='mr-2 w-4 h-4 ' />
							Copy Item ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Pencil className='w-4 h-4 mr-2' />
							Edit
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Trash2 className='w-4 h-4 mr-2' />
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
export const categoryColumns = [
	{
		accessorKey: "title",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		accessorKey: "description",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Category Description
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const category = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button className='h-8 w-8 p-0'>
							<span className='sr-only'>Open menu</span>
							<MoreHorizontal className='h-4 w-4' />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(category?.id)}
						>
							<Clipboard className='mr-2 w-4 h-4 ' />
							Copy Category ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Pencil className='w-4 h-4 mr-2' />
							Edit
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Trash2 className='w-4 h-4 mr-2' />
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
export const supplierColumns = [
	{
		accessorKey: "title",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Supplier Name
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		accessorKey: "email",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Supplier Email
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		accessorKey: "phone",
		header: ({ column }) => {
			return (
				<button className='flex items-center justify-between'>
					Supplier Phone
				</button>
			);
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const supplier = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button className='h-8 w-8 p-0'>
							<span className='sr-only'>Open menu</span>
							<MoreHorizontal className='h-4 w-4' />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(supplier?.id)}
						>
							Copy Supplier ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Pencil className='w-4 h-4 mr-2' />
							Edit
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Trash2 className='w-4 h-4 mr-2' />
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
export const brandColumns = [
	{
		accessorKey: "title",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Brand Name
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},

	{
		id: "actions",
		cell: ({ row }) => {
			const brand = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button className='h-8 w-8 p-0'>
							<span className='sr-only'>Open menu</span>
							<MoreHorizontal className='h-4 w-4' />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(brand?.id)}
						>
							Copy Brand ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Pencil className='w-4 h-4 mr-2' />
							Edit
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Trash2 className='w-4 h-4 mr-2' />
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
export const unitColumns = [
	{
		accessorKey: "title",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Brand Name
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		accessorKey: "abbreviation",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Brand Name
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const Unit = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button className='h-8 w-8 p-0'>
							<span className='sr-only'>Open menu</span>
							<MoreHorizontal className='h-4 w-4' />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(Unit?.id)}
						>
							Copy Unit ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Pencil className='w-4 h-4 mr-2' />
							Edit
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Trash2 className='w-4 h-4 mr-2' />
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
export const warehouseColumns = [
	{
		accessorKey: "title",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Warehouse Name
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		accessorKey: "location",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Location
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		accessorKey: "warehouseType",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Type
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const brand = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button className='h-8 w-8 p-0'>
							<span className='sr-only'>Open menu</span>
							<MoreHorizontal className='h-4 w-4' />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(brand?.id)}
						>
							Copy Brand ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Pencil className='w-4 h-4 mr-2' />
							Edit
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Trash2 className='w-4 h-4 mr-2' />
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
export const stockAddColumns = [
	{
		accessorKey: "referenceNumber",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Reference Number
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		accessorKey: "addedStockQuantity",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Added Stock Qty.
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		accessorKey: "warehouseType",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Type
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const brand = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button className='h-8 w-8 p-0'>
							<span className='sr-only'>Open menu</span>
							<MoreHorizontal className='h-4 w-4' />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(brand?.id)}
						>
							Copy Brand ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Pencil className='w-4 h-4 mr-2' />
							Edit
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Trash2 className='w-4 h-4 mr-2' />
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
export const stockTransferColumns = [
	{
		accessorKey: "referenceNumber",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Reference Number
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		accessorKey: "addedStockQuantity",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Added Stock Qty.
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		accessorKey: "warehouseType",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Type
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</button>
			);
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const brand = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button className='h-8 w-8 p-0'>
							<span className='sr-only'>Open menu</span>
							<MoreHorizontal className='h-4 w-4' />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(brand?.id)}
						>
							Copy Brand ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Pencil className='w-4 h-4 mr-2' />
							Edit
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Trash2 className='w-4 h-4 mr-2' />
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
