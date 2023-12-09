import { clsx } from "clsx";
import Link from "next/link";
import React from "react";

const SubscriptionCard = ({ open }) => {
	const containerClasses = clsx("p-1", "mt-24", open ? "block" : "hidden");
	return (
		<div className={containerClasses}>
			<div className='rounded-lg px-4 py-6  mt-6  bg-card text-cardForeground'>
				{/* <div className='border-b border-violet-300'> */}
				<p className='text-sm border-l-2 border-accent pl-2'>
					Your Premium Plan&apos;s trial expires in{" "}
					<span className='text-purple-900 font-bold text-md'>13 days</span>.{" "}
				</p>
				{/* </div> */}
				<hr className='border-t border-accent mt-2' />

				<div className='flex text-sm justify-between text-center'>
					<button className='px-3 py-2 self-center border-r border-accent hover:bg-vercelHover'>
						Change Plan
					</button>
					<Link className='px-3 py-2 hover:bg-vercelHover self-center' href='/'>
						Upgrade
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SubscriptionCard;
