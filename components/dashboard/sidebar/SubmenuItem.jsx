import clsx from "clsx";
import Link from "next/link";

const SubMenuItem = ({ submenuItem }) => (
	<li
		className={clsx(
			"text-white",
			"text-sm",
			"flex",
			"items-center",
			"justify-between",
			"cursor-pointer",
			"p-3",
			"px-20",
			"hover:bg-purple-400",
			"rounded-md"
		)}
	>
		{" "}
		<span>{submenuItem.icon}</span>
		<Link href={submenuItem.href}>{submenuItem.title}</Link>
	</li>
);

export default SubMenuItem;
