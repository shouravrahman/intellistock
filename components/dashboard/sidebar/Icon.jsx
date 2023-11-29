import clsx from "clsx";
import Link from "next/link";

const Icon = ({ icon, className, href }) => (
	<Link href={href} className={clsx("rounded", "cursor-pointer", className)}>
		{icon}
	</Link>
);

export default Icon;
