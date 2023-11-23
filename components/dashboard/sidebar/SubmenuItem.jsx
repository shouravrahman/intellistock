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
				"text-vercel-white",

				"flex-between",
				"ml-4",
				"my-2",
				"gap-x-8",
				"cursor-pointer",
				"p-2",
				"hover:bg-vercel-hover",
				// "ml-10",
				pathname === submenuItem.href && "bg-vercel-hover",
				"rounded-md"
			)}
		>
			{" "}
			<Icon icon={submenuItem.icon} />
			<Link className='text-sm font-medium flex-1' href={submenuItem.href}>
				{submenuItem.title}
			</Link>
		</li>
	);
};

export default SubMenuItem;
