"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
export const categoryColumns = [
	{
		accessorKey: "title",
		header: ({ column }) => {
			return (
				<button
					className='flex items-center justify-between'
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Category Tiltle
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
					Category Tiltle
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
							Copy Category ID
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
