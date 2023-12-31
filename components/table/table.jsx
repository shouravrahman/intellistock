import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef(({ className, ...props }, ref) => (
	<div className='relative w-full overflow-auto bg-form text-foreground'>
		<table
			ref={ref}
			className={cn("w-full caption-bottom text-sm", className)}
			{...props}
		/>
	</div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
	<thead ref={ref} className={cn("[&_tr]:border-b ", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef(({ className, ...props }, ref) => (
	<tbody
		ref={ref}
		className={cn(
			"[&_tr:last-child]:border-b-[1px]   border-border",
			className
		)}
		{...props}
	/>
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
	<tfoot
		ref={ref}
		className={cn(
			"border-border border-t bg-slate-100/50 font-medium [&>tr]:last:border-b-2 dark:bg-slate-800/50",
			className
		)}
		{...props}
	/>
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef(({ className, ...props }, ref) => (
	<tr
		ref={ref}
		className={cn(
			"border-b-[1px] border-border transition-colors hover:bg-vercelHover data-[state=selected]:bg-slate-100  ",
			className
		)}
		{...props}
	/>
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef(({ className, ...props }, ref) => (
	<th
		ref={ref}
		className={cn(
			"h-10 px-6 text-left align-middle font-medium text-card bg-primary [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-lg",
			"border-r",
			className
		)}
		{...props}
	/>
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
	<td
		ref={ref}
		className={cn(
			"px-6 py-2 align-middle   border-border border-r-[1px] [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] ",
			className
		)}
		{...props}
	/>
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
	<caption
		ref={ref}
		className={cn("mt-4 text-sm text-slate-500 dark:text-slate-400", className)}
		{...props}
	/>
));
TableCaption.displayName = "TableCaption";

export {
	Table,
	TableHeader,
	TableBody,
	TableFooter,
	TableHead,
	TableRow,
	TableCell,
	TableCaption,
};
