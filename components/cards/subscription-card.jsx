import { clsx } from "clsx";
import Link from "next/link";
import React from "react";

const SubscriptionCard = ({ open }) => {
	const containerClasses = clsx("p-1", "mt-24", open ? "block" : "hidden");
	return (
		<div className={containerClasses}>
			<div className='rounded-lg px-4 py-2 mt-6 bg-slate-900 text-vercel-white'>
				{/* <div className='border-b border-violet-300'> */}
				<p className='text-sm border-l-2 border-violet-400 pl-2'>
					Your Premium Plan&apos;s trial expires in{" "}
					<span className='text-orange-500 text-sm'>13 days</span>.{" "}
				</p>
				{/* </div> */}
				<hr className='border-t border-violet-400 mt-2' />

				<div className='flex text-sm justify-between'>
					<button className='px-3 py-3 border-r border-violet-400 hover:bg-slate-800'>
						Change Plan
					</button>
					<Link className='px-3 py-3 hover:bg-slate-800' href='/'>
						Upgrade
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SubscriptionCard;
