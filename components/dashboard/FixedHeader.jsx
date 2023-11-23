import {
	Grid2X2,
	HelpCircle,
	LayoutGrid,
	List,
	ListIcon,
	MoreHorizontal,
	Plus,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const FixedHeader = ({ href }) => {
	return (
		<div className='flex-between bg-white py-5 px-6'>
			<button className='text-2xl'>All Items</button>
			<div className='flex gap-6'>
				{/* new button*/}

				<Link
					href={href}
					className='flex-between px-3 py-2  rounded-md bg-purple-900'
				>
					<Plus className='h-6 w-6 text-vercel-white' />
					<span className=' text-vercel-white ml-2'>New</span>
				</Link>

				{/* layout button */}
				<div className='flex rounded-md overflow-hidden'>
					<button className='p-2 bg-gray-300 rounded-md border-r border-gray-200 outline-none'>
						<List className='w-4 h-4' />
					</button>
					<button className='p-2 bg-gray-100 rounded-md outline-none'>
						<LayoutGrid className='w-4 h-4' />
					</button>
				</div>
				{/* options button */}
				{/* more button */}
				<button className='p-2 bg-gray-100 rounded-md'>
					<MoreHorizontal className='w-4 h-4' />
				</button>
				{/* help button */}
				<button className='p-2 bg-orange-600 text-vercel-white rounded-md'>
					<HelpCircle className='w-5 h-5' />
				</button>
			</div>
		</div>
	);
};

export default FixedHeader;
