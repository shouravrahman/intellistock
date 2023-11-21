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
				"text-white",

				"flex-between",
				"ml-4",
				"my-2",
				"gap-x-8",
				"cursor-pointer",
				"p-2",
				// "ml-10",
				pathname === submenuItem.href
					? "bg-[hsla(0,0%,100%,.07)]"
					: "bg-[hsla(0,0%,100%,.02)]",
				"hover:bg-[hsla(0,0%,100%,.07)]",
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
