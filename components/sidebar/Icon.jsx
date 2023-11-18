import clsx from "clsx";

const Icon = ({ icon, className }) => (
	<div className={clsx("rounded", "cursor-pointer", "px-1", className)}>
		{icon}
	</div>
);

export default Icon;
