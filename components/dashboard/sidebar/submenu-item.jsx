"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

const SubMenuItem = ({ submenuItem }) => {
	const pathname = usePathname();

	return (
		<li
			className={clsx(
				"text-foreground",

				"flex-between",
				"ml-4",
				"my-2",
				"gap-x-8",
				"cursor-pointer",
				"p-2",
				"hover:bg-vercelHover",
				// "ml-10",
				pathname === submenuItem.href && "bg-vercelHover",
				"rounded-md"
			)}
		>
			{" "}
			<Icon icon={submenuItem.icon} href={submenuItem.href} />
			<Link className='text-sm font-semibold flex-1' href={submenuItem.href}>
				{submenuItem.title}
			</Link>
		</li>
	);
};

export default SubMenuItem;
