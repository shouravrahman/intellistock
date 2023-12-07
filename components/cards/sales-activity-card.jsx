import Link from "next/link";

const SalesActivityCard = ({ number, title, unit, icon, href, color }) => {
	return (
		<Link
			href={href}
			className='shadow-sm px-3 py-4 border border-border rounded-lg bg-form cursor-pointer hover:border-slate-600 flex items-center flex-col gap-3 transition-all ease-in duration-200'
		>
			<h4 className={`font-semibold text-3xl ${color} `}>{number}</h4>
			<small className='text-foreground/60'>{unit}</small>
			<div className='flex items-center space-x-2 text-foreground/60'>
				{icon}
				<span className='uppercase text-xs'>{title}</span>
			</div>
		</Link>
	);
};

export default SalesActivityCard;
