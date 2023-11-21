import clsx from "clsx";

const Icon = ({ icon, className }) => (
	<div className={clsx("rounded", "cursor-pointer", className)}>{icon}</div>
);

export default Icon;
