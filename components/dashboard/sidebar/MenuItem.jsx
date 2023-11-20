"use client";
import clsx from "clsx";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Icon from "./Icon";
import { usePathname } from "next/navigation";

const MenuItem = ({ menu, open, subMenuOpen, toggleSubMenu }) => {
	const pathname = usePathname();

	return (
		<li
			className={clsx(
				"text-white",
				"text-sm",
				"flex",
				"items-center",
				"justify-between",
				"gap-x-8",
				"cursor-pointer",
				"p-2",
				pathname === menu.href ? "bg-[hsla(0,0%,100%,.07)]" : "",
				"hover:bg-[hsla(0,0%,100%,.07)]",
				"rounded-md",
				menu.spacing ? "mt-12" : "mt-3"
			)}
		>
			<Icon icon={menu.icon} />
			<Link
				className={clsx(
					!open && "hidden",
					"text-base",
					"font-medium",
					"flex-1",
					"duration-300"
				)}
				href={menu.href}
			>
				{menu.title}
			</Link>
			{menu.submenu && open && (
				<ChevronDown
					onClick={toggleSubMenu}
					className={clsx(
						"flex-1",
						"duration-300",
						"ease-in",
						subMenuOpen && "rotate-180"
					)}
				/>
			)}
		</li>
	);
};

export default MenuItem;
