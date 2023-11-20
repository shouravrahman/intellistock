import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const SalesActivityCard = ({ number, title, unit, icon, href, color }) => {
	return (
		<Link
			href={href}
			className='shadow-sm px-3 py-4 border border-slate-200 rounded-lg bg-white cursor-pointer hover:border-slate-600 flex items-center flex-col gap-3 transition-all ease-in duration-200'
		>
			<h4 className={`font-semibold text-3xl ${color} `}>{number}</h4>
			<small className='text-slate-500'>{unit}</small>
			<div className='flex items-center space-x-2 text-slate-500'>
				{icon}
				<span className='uppercase text-xs'>{title}</span>
			</div>
		</Link>
	);
};

export default SalesActivityCard;
