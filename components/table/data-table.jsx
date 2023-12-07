"use client";
import {
	flexRender,
	getCoreRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
	getPaginationRowModel,
} from "@tanstack/react-table";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/table/table";
import { useState } from "react";
import Button from "../shared/button";

const DataTable = ({ columns, data }) => {
	const [sorting, setSorting] = useState([]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		state: {
			sorting,
		},
	});
	return (
		<div className='m-8 shadow-lg border border-border/20'>
			<Table>
				<TableHeader>
					{table?.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
											  )}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table?.getRowModel().rows?.length ? (
						table?.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className='h-24 text-center'>
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
			<div className=' mt-2 mx-8 flex items-center justify-end gap-2 py-4'>
				{/* <button className='px-3 py-2 rounded-md inline-flex font-semibold items-center text-foreground bg-[#126cfd] hover:bg-[#09367f] hover:text-foreground transition-all duration-200 ease'>
					Previous
				</button> */}
				<Button
					label='Previous'
					onClick={() => table?.previousPage()}
					disabled={!table?.getCanPreviousPage()}
				/>
				<Button
					label='Next'
					onClick={() => table?.nextPage()}
					disabled={!table.getCanNextPage()}
				/>
			</div>
		</div>
	);
};
export default DataTable;
