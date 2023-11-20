"use client";
import React, { useState } from "react";
import { CreditCard, X } from "lucide-react";

const DashboardBanner = () => {
	const [showBanner, setShowBanner] = useState(true);

	const handleCloseBanner = () => {
		setShowBanner(false);
	};

	return (
		<>
			{showBanner && (
				<div className='overflow-hidden grid grid-cols-12 bg-white py-6 px-16 text-black gap-4'>
					<div className='col-span-2 pt-2'>
						<CreditCard className='w-16 h-16 text-slate-500' />
					</div>

					<div className='col-span-6'>
						<h2 className='font-bold text-3xl'>
							Start accepting online payments
						</h2>
						<p className='font-medium text-lg'>
							Businesses are moving towards online payments as they&apos;re
							easy, secure and fast. Try them for your business today.
						</p>
					</div>

					<div className='col-span-3 flex items-center justify-end'>
						<button
							className='text-white uppercase py-2.5 px-8 bg-black focus:outline-none rounded-lg'
							onClick={handleCloseBanner}
						>
							Enable
						</button>
					</div>
					<div className='relative'>
						<button onClick={handleCloseBanner} className=' absolute  right-8'>
							<X className='text-slate-600' />
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default DashboardBanner;