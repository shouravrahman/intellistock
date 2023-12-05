import {
	HelpCircle,
	LayoutGrid,
	List,
	MoreHorizontal,
	Plus,
} from "lucide-react";
import Link from "next/link";

const FixedHeader = ({ href, title }) => {
	return (
		<div className='flex-between py-5 px-6 shadow-sm'>
			<button className='text-white text-2xl'>{title}</button>
			<div className='flex gap-6'>
				{/* new button*/}

				<Link
					href={href}
					className='flex-between px-3 py-2  rounded-md bg-violet-600'
				>
					<Plus className='h-6 w-6 text-vercel-white' />
					<span className=' text-vercel-white ml-2'>New</span>
				</Link>

				{/* layout button */}
				<div className='flex rounded-md overflow-hidden gap-2'>
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
				<button className='p-2 bg-violet-600 text-vercel-white rounded-md'>
					<HelpCircle className='w-5 h-5' />
				</button>
			</div>
		</div>
	);
};

export default FixedHeader;
