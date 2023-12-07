import { clsx } from "clsx";
import Link from "next/link";
import React from "react";

const SubscriptionCard = ({ open }) => {
	const containerClasses = clsx("p-1", "mt-24", open ? "block" : "hidden");
	return (
		<div className={containerClasses}>
			<div className='rounded-lg px-4 py-2 mt-6  bg-form text-foreground'>
				{/* <div className='border-b border-violet-300'> */}
				<p className='text-sm border-l-2 border-accent pl-2'>
					Your Premium Plan&apos;s trial expires in{" "}
					<span className='text-accent text-sm'>13 days</span>.{" "}
				</p>
				{/* </div> */}
				<hr className='border-t border-accent mt-2' />

				<div className='flex text-sm justify-between'>
					<button className='px-3 py-3 border-r border-accent hover:bg-btn-hover'>
						Change Plan
					</button>
					<Link className='px-3 py-3 hover:bg-btn-hover' href='/'>
						Upgrade
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SubscriptionCard;
