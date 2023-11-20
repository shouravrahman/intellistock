import { clsx } from "clsx";
import Link from "next/link";
import React from "react";

const SubscriptionCard = ({ open }) => {
	const containerClasses = clsx("p-1", "mt-24", open ? "block" : "hidden");
	return (
		<div className={containerClasses}>
			<div className='rounded-lg p-3 mt-6 bg-slate-900 text-white'>
				{/* <div className='border-b border-orange-300'> */}
				<p className='text-sm border-l-2 border-orange-400 pl-2'>
					Your Premium Plan&apos;s trial expires in{" "}
					<span className='text-orange-400 text-sm'>13 days</span>.{" "}
				</p>
				{/* </div> */}
				<hr className='border-t border-orange-400 mt-2' />

				<div className='flex  text-sm'>
					<button className='px-2 pt-2 border-r border-orange-400 hover:bg-slate-800'>
						Change Plan
					</button>
					<Link className='px-2 pt-2 hover:bg-slate-800' href='/'>
						Upgrade
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SubscriptionCard;
